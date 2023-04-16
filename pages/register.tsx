import { NextPage } from 'next';

// import { useNotLoggedIn } from '@/common/hooks/auth';
import Register from '@/modules/register/components/Register';

const RegisterPage: NextPage = () => (
  // useNotLoggedIn();

  <Register />
);

export default RegisterPage;
