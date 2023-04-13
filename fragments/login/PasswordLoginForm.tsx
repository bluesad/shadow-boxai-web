import { Box, Button, Input } from '@chakra-ui/react';
import * as Yup from 'yup';

import { Field, Form } from '@/components/Form';
import { useAuth } from '@/context/auth';

interface FormValues {
  password: string;
  username: string;
}

const initialValues: FormValues = {
  password: '',
  username: '',
};

const validationSchema = Yup.object().shape({
  password: Yup.string().required('请输入密码'),
  username: Yup.string().required('请输入用户名'),
});

export default function PasswordLoginForm() {
  const { passwordLogin, loggingIn } = useAuth();
  const handlePasswordFormSubmit = ({ username, password }: FormValues) => {
    passwordLogin({ username, password });
  };

  return (
    <Box pt="12">
      <Form<FormValues>
        className="px-12"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlePasswordFormSubmit}
      >
        <Field name="username" disabled={loggingIn}>
          <Input focusBorderColor="brand.500" placeholder="用户名" />
        </Field>
        <Field name="password" disabled={loggingIn}>
          <Input focusBorderColor="brand.500" placeholder="密码" />
        </Field>
        <Button
          type="submit"
          colorScheme="brand"
          display="block"
          width="100%"
          mt="4"
          isLoading={loggingIn}
        >
          登录
        </Button>
      </Form>
    </Box>
  );
}
