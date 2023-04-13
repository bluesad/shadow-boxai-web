import { createContext, useContext } from 'react';

import { OtpLoginParam, PasswordLoginParam } from './interface';

interface AuthContext {
  accessToken: string | null;
  user: Schema.User | null;
  loggedIn: boolean;
  passwordLogin: (param: PasswordLoginParam) => void;
  otpLogin: (param: OtpLoginParam) => void;
  loggingIn: boolean;
  logout: () => void;
  loggingOut: boolean;
}

/*****************************************************************************
 * Default Export
 *****************************************************************************/
const AuthContext = createContext<AuthContext | null>(null);
export default AuthContext;

/*****************************************************************************
 * Exports
 *****************************************************************************/
export function useAuth() {
  const context = useContext(AuthContext);

  if (context == null) {
    throw new Error("Can't find `AuthContext` in parent nodes of Virtual DOM tree. ");
  }

  return context;
}
