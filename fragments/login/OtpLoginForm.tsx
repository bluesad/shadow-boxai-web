import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import * as Yup from 'yup';
import { FormikProps } from 'formik';

import { Field, Form } from '@/components/Form';
import { useAuth } from '@/context/auth';
import postOtpCaptcha from '@/services/otp/postOtpCaptcha';
import sendOtpMobile from '@/services/otp/sendOtpMobile';

interface FormValues {
  target: string;
  token: string;
  otp: string;
  captcha: string;
}

const initialValues: FormValues = {
  target: '',
  token: '',
  otp: '',
  captcha: '',
};

const validationSchema = Yup.object().shape({
  otp: Yup.string().required('请输入短信验证码'),
  target: Yup.string().required('请输入手机号'),
});

/**
 * WIP
 */
export default function OtpLoginForm() {
  const captchaQuery = useQuery({ queryKey: ['query-captcha'], queryFn: postOtpCaptcha });
  const [captcha, setCaptcha] = useState('');
  const handleCaptchaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(event.target.value);
  };

  const [sent, setSent] = useState(false);
  const sendOtpMutation = useMutation({
    mutationKey: ['send-otp'],
    mutationFn: sendOtpMobile,
    onSuccess: () => setSent(true),
  });
  const handleOtpSend = (form: FormikProps<FormValues>) => () => {
    form.validateField('target');
    form.setFieldError('target', '1234');
    if (form.errors.target) {
      return;
    }

    sendOtpMutation.mutate({
      captchaKey: captchaQuery.data!.captchaKey,
      captchaCode: captcha,
      mobile: form.values.target,
    });
  };

  const { otpLogin } = useAuth();
  const handlePasswordFormSubmit = (values: FormValues) => {
    otpLogin({ type: 'mobile', ...values });
  };

  return (
    <Box pt="12">
      <Form<FormValues>
        className="px-12"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlePasswordFormSubmit}
      >
        <Field name="target" helper="请填入您的手机号">
          <Input />
        </Field>
        <Field<FormValues> name="captcha" helper="请输入图片中的字母与数字（点击图片刷新）">
          {({ form }) => (
            <InputGroup>
              {/* CAPTCHA Image */}
              <InputLeftAddon px="0" bg="brand.100" w="113px">
                {captchaQuery.isLoading ? (
                  <Spinner mx="auto" color="brand.500" />
                ) : (
                  <Image
                    src={captchaQuery.data?.img}
                    alt="captcha"
                    cursor="pointer"
                    onClick={() => void captchaQuery.refetch()}
                  />
                )}
              </InputLeftAddon>
              {/* CAPTCHA Answer Input */}
              <Input
                placeholder=""
                disabled={sent}
                value={captcha}
                onChange={handleCaptchaChange}
              />
              {/* CAPTCHA Answer Submit */}
              <InputRightElement w="20">
                <Button
                  size="sm"
                  colorScheme="brand"
                  isDisabled={
                    !form.values.target || !form.values.captcha || captchaQuery.isFetching
                  }
                  onClick={handleOtpSend(form)}
                >
                  发送验证码
                </Button>
              </InputRightElement>
            </InputGroup>
          )}
        </Field>
        <Field name="otp" helper="请填入您手机上收到的短信验证码">
          <Input />
        </Field>
        <Button
          type="submit"
          colorScheme="brand"
          display="block"
          width="100%"
          mt="4"
          isLoading={sendOtpMutation.isLoading}
        >
          登录 / 注册
        </Button>
      </Form>
    </Box>
  );
}
