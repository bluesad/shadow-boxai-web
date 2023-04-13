import { client, setAccessToken, setRefreshToken } from '../client';

import { encrypt } from '@/utils/encrypt';

interface Param {
  username: string;
  password: string;
}

interface Response {
  accessToken: string;
  accessExpireIn: number;
  refreshToken: string;
  refreshExpireIn: number;
}

const postPasswordLogin: Service.Request<Response, Param> = async (param) => {
  const { username, password } = param;
  const response = await client.post<Response>('auth/login/password', {
    username,
    password: await encrypt(password),
  });

  setAccessToken(response.accessToken, response.accessExpireIn);
  setRefreshToken(response.refreshToken, response.refreshExpireIn);

  return response;
};

export default postPasswordLogin;
