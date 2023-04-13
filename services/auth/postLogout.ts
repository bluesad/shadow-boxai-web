import { client, removeAccessToken, removeRefreshToken } from '../client';

const postLogout: Service.Request = async () => {
  await client.post('auth/logout');

  removeAccessToken();
  removeRefreshToken();
};

export default postLogout;
