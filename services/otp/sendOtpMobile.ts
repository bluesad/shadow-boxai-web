import { client } from '../client';

interface Param {
  captchaCode: string;
  captchaKey: string;
  mobile: string;
}

type Response = null;

const sendOtpMobile: Service.Request<Response, Param> = async (param) =>
  client.post('otp/send/mobile', param);
export default sendOtpMobile;
