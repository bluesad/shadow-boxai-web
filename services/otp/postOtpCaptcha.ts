import { client } from '../client';

interface Response {
  img: string;
  captchaKey: string;
}

const postOtpCaptcha: Service.Request<Response> = async () =>
  client.post<Response>('otp/captcha').then((response) => {
    response.img = `data:image/png;base64,${response.img}`;
    return response;
  });
export default postOtpCaptcha;
