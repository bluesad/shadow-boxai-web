import { client } from '../client';

interface Param {
  username: string;
  password: string;
  mobile: string;
  displayName?: string;
  email?: string;
  registerFrom?: string;
  smsCode: string;
  smsCodeKey: string;
}

type Response = Schema.User['id'];

const postRegister: Service.Request<Response, Param> = async (param) =>
  client.post('auth/registered', param);
export default postRegister;
