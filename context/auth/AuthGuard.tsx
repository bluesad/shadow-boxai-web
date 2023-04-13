import { useAuth } from './AuthContext';

import Redirect from '@/components/Redirect';
import { PATH } from '@/const';

interface Props {
  children?: React.ReactNode;
  redirectTo?: string;
}

export default function AuthGuard(props: Props) {
  const { children, redirectTo = PATH.LOGIN } = props;

  const { loggedIn } = useAuth();
  if (!loggedIn) return <Redirect to={redirectTo} />;

  return <>{children}</>;
}
