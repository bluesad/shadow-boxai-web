/* eslint-disable @typescript-eslint/no-explicit-any */
import { hasOwnProperty } from '@/utils/assert';
import { Client, ClientError, ClientResponse } from '@/utils/service';

interface ResponseData<D = any> {
  code: number;
  data: D;
  message: string;
}

interface ResponseError {
  status: number;
  code: number;
  message: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
const REQUEST_TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT);
const NO_AUTH_CODE = 401;

function onFulfilled<R extends ClientResponse<ResponseData<D>>, D>(response: R): D {
  return response.data.data;
}

// Reference: https://axios-http.com/docs/handling_errors
function onRejected(error: Error) {
  return Promise.reject(
    new ClientError<ResponseData, ResponseError>(error, {
      onNetwork: () => {
        console.warn('Network Error');
      },
      onInternal: () => {
        console.warn('Internal Error');
      },
      onRequest: () => {
        console.warn('Request Error');
      },
      onResponse: (response) => ({
        status: response.status,
        code: response.data.code,
        message: response.data.message,
      }),
      onFinal: (clientError) => {
        if (clientError.response == null) return;

        switch (clientError.response.status) {
          case NO_AUTH_CODE:
            //   goLogin();
            break;
          default:
            console.warn('Uncatched Error');
            break;
        }
      },
    }),
  );
}

export const client = new Client<ResponseData<any>, Error>(
  {
    timeout: REQUEST_TIMEOUT,
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  onFulfilled,
  onRejected,
);

client.instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) config.headers.set('Authorization', `Bearer ${accessToken.token}`);
  return config;
});

/*****************************************************************************
 * JWT Token handlers
 *****************************************************************************/
const ACCESS_TOKEN = 'antipodal-access-token';
const REFRESH_TOKEN = 'antipodal-refresh-token';
// eslint-disable-next-line no-magic-numbers
const expireBuffer = 5 * 60 * 1000; // 5 mins

export interface AuthToken {
  token: string;
  expiration: number;
}

export function getAccessToken() {
  return normalizeToken(sessionStorage.getItem(ACCESS_TOKEN));
}
export function setAccessToken(token: string, expireInSeconds: number) {
  sessionStorage.setItem(
    ACCESS_TOKEN,
    JSON.stringify({
      token,
      // eslint-disable-next-line no-magic-numbers
      expiration: Date.now() + expireInSeconds * 1000 - expireBuffer,
    }),
  );
}
export function removeAccessToken() {
  sessionStorage.removeItem(ACCESS_TOKEN);
}
export function getRefreshToken() {
  return normalizeToken(localStorage.getItem(REFRESH_TOKEN));
}
export function setRefreshToken(token: string, expireInSeconds: number) {
  localStorage.setItem(
    REFRESH_TOKEN,
    JSON.stringify({
      token,
      // eslint-disable-next-line no-magic-numbers
      expiration: Date.now() + expireInSeconds * 1000 - expireBuffer,
    }),
  );
}
export function removeRefreshToken() {
  localStorage.removeItem(REFRESH_TOKEN);
}

function normalizeToken(value: string | null) {
  try {
    const token = value && (JSON.parse(value) as unknown);
    return isValidToken(token) ? token : null;
  } catch {
    return null;
  }
}

function isValidToken(token: unknown): token is AuthToken {
  if (!token) return false;
  if (typeof token !== 'object') return false;

  if (!hasOwnProperty(token, 'token') || typeof token.token !== 'string') {
    return false;
  }

  if (
    !hasOwnProperty(token, 'expiration') ||
    typeof token.expiration !== 'number' ||
    token.expiration <= Date.now()
  ) {
    return false;
  }

  return true;
}
