import { client, setAccessToken, setRefreshToken } from '../client';

interface Param {
  type: 'mobile';
  target: string;
  otp: string;
  token: string;
}

interface Response {
  accessToken: string;
  accessExpireIn: number;
  refreshToken: string;
  refreshExpireIn: number;
}

const postOtpLogin: Service.Request<Response, Param> = async (param) => {
  const { type, target, otp, token } = param;
  const response = await client.post<Response>('auth/login/otp', {
    loginType: type,
    otpObject: target,
    otpCode: otp,
    otpCodeKey: token,
  });

  setAccessToken(response.accessToken, response.accessExpireIn);
  setRefreshToken(response.refreshToken, response.refreshExpireIn);

  return response;
};

export default postOtpLogin;
