import { client, setAccessToken } from '../client';

interface Param {
  refreshToken: string;
}

interface Response {
  accessToken: string;
  accessExpireIn: number;
}

const postRefresh: Service.Request<Response, Param> = async (param) => {
  const response = await client.post<Response>('auth/refreshToken', param);

  setAccessToken(response.accessToken, response.accessExpireIn);

  return response;
};
export default postRefresh;
