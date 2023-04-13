import { postOtpLogin, postPasswordLogin } from '@/services/auth';

export type PasswordLoginParam = Service.Params<typeof postPasswordLogin>;
export type OtpLoginParam = Service.Params<typeof postOtpLogin>;
