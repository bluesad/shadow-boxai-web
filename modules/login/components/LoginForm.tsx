// import { useState } from 'react';
// import { useApolloClient } from '@apollo/client';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

import LoaderButton from '@/common/components/button/components/LoaderButton';
import InputComponent from '@/common/components/input/components/InputComponent';
import InputPasswordComponent from '@/common/components/input/components/InputPasswordComponent';
// import { Field, Form } from '@/components/Form';
import { useAuth } from '@/context/auth';
// import { LOGIN } from '@/common/graphql/mutation/LOGIN';
// import { useModal } from '@/common/recoil/modal';
// import { useLogin } from '@/common/recoil/user';

// import IncorrectCredentials from '../modals/IncorrectCredentials';
interface FormValues {
  password: string;
  username: string;
}

const initialValues: FormValues = {
  password: '',
  username: '',
};

// const validationSchema = Yup.object().shape({
//   password: Yup.string().required('请输入密码'),
//   username: Yup.string().required('请输入用户名'),
// });

const RegistrationForm = () => {
  // const { mutate } = useApolloClient();

  // const [loading, setLoading] = useState(false);
  const { passwordLogin, loggingIn } = useAuth();
  // const handlePasswordFormSubmit = ({ username, password }: FormValues) => {
  //   passwordLogin({ username, password });
  // };

  // const { handleLogin } = useLogin();

  // const { openModal } = useModal();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      // setLoading(true);
      // mutate<{
      //   login: {
      //     user: { username: string; email: string; id: string };
      //     jwt: string;
      //   };
      // }>({ mutation: LOGIN, variables: values })
      //   .then((res) => {
      //     if (res.data?.login)
      //       handleLogin(res.data.login.user, res.data.login.jwt);
      //     setLoading(false);
      //   })
      //   .catch(() => {
      //     openModal(<IncorrectCredentials />);
      //     setLoading(false);
      //   });
      passwordLogin({ username: values.username, password: values.password });
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};

      if (!values.username) {
        errors.username = '必填项';
      }

      // if (values.mobile && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mobile)) {
      //   errors.email = 'Invalid email';
      // }

      if (!values.password) {
        errors.password = '必填项';
      }

      return errors;
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <div className="flex w-full justify-center">
      <form className="flex w-160 flex-col gap-1" onSubmit={formik.handleSubmit}>
        <InputComponent
          // label="Email"
          placeholder="请输入手机号码"
          name="username"
          type="tel"
          handleChange={formik.handleChange}
          value={formik.values.username}
          errors={formik.errors}
          handleBlur={formik.handleBlur}
          className="py-2.5 mb-2"
        />
        <InputPasswordComponent
          // label="Password"
          placeholder="请输入密码"
          name="password"
          handleChange={formik.handleChange}
          value={formik.values.password}
          errors={formik.errors}
          handleBlur={formik.handleBlur}
          className="py-2.5 mb-2"
        />

        <LoaderButton className="mt-1 rounded-md py-2" type="submit" loading={loggingIn}>
          登录
        </LoaderButton>
      </form>
    </div>
  );
};

export default RegistrationForm;
