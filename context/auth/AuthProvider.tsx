import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';

import AuthContext from './AuthContext';

import useLatestCallback from '@/hooks/useLatestCallback';
import { getProfile, postLogout, postPasswordLogin, postRefresh } from '@/services/auth';
import { getRefreshToken } from '@/services/client';
import postOtpLogin from '@/services/auth/postOtpLogin';

/*****************************************************************************
 * Types
 *****************************************************************************/
interface Props {
  children?: React.ReactNode;
}

type RefreshResponse = Service.Response<typeof postRefresh>;

/*****************************************************************************
 * Default Export
 *****************************************************************************/
export default function AuthProvider(props: Props) {
  const { children } = props;

  /***************************************************************************
   * about accessToken's value
   * 1. when `undefined`, means not loaded yet
   * 2. when `null`, means checked refresh token but not exists or valid
   * 3. else, got valid access token, user logged in
   ***************************************************************************/
  const [accessToken, setAccessToken] = useState<RefreshResponse | null>(null);
  useRefreshing(accessToken);

  const loaded = useAccessLoad(setAccessToken);
  const { login: passwordLogin, loggingIn: passwordLoggingIn } = usePasswordLogin(setAccessToken);
  const { login: otpLogin, loggingIn: otpLoggingIn } = useOtpLogin(setAccessToken);
  const user = useProfile(accessToken != null);
  const { logout, loggingOut } = useLogout(setAccessToken);
  const contextValue = useMemo(
    () => ({
      accessToken: accessToken?.accessToken ?? null,
      user,
      loggedIn: accessToken != null,
      passwordLogin,
      otpLogin,
      loggingIn: passwordLoggingIn || otpLoggingIn,
      logout,
      loggingOut,
    }),
    [
      accessToken,
      loggingOut,
      logout,
      otpLoggingIn,
      otpLogin,
      passwordLoggingIn,
      passwordLogin,
      user,
    ],
  );

  return loaded ? (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  ) : (
    <></>
  );
}

function useRefreshing(response: Nullable<RefreshResponse>) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const { refetch: startRefreshing } = useQuery({
    queryKey: ['refresh-loop'],
    enabled: response != null,
    retry: false,
    refetchOnWindowFocus: false,
    queryFn() {
      return new Promise<Service.Response<typeof postRefresh>>((resolve, reject) => {
        timeoutRef.current = setTimeout(() => {
          const refreshToken = getRefreshToken();
          if (refreshToken != null) {
            void postRefresh({ refreshToken: refreshToken.token }).then(resolve);
          } else {
            reject();
          }
        }, Math.max(0, response!.accessExpireIn * 1000 - 5 * 60 * 1000)); // eslint-disable-line no-magic-numbers
      });
    },
    onSuccess() {
      void startRefreshing();
    },
  });

  const stopRefreshing = useLatestCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  });
  useEffect(() => {
    if (response == null) stopRefreshing();
  }, [response, stopRefreshing]);
}

function useAccessLoad(onSuccess: (response: RefreshResponse) => void) {
  const [loaded, setLoaded] = useState(false);

  useQuery({
    queryKey: ['refresh-init'],
    retry: false,
    refetchOnWindowFocus: false,
    queryFn() {
      const refreshToken = getRefreshToken();
      if (refreshToken == null) return null;
      return postRefresh({ refreshToken: refreshToken.token });
    },
    onSuccess(data) {
      if (data != null) onSuccess(data);
    },
    onSettled() {
      setLoaded(true);
    },
  });

  return loaded;
}

function usePasswordLogin(onSuccess: (response: RefreshResponse) => void) {
  const { mutate: login, isLoading: loggingIn } = useMutation({
    mutationKey: ['login'],
    mutationFn: postPasswordLogin,
    onSuccess(data) {
      onSuccess(data);
    },
  });

  return { login, loggingIn };
}

function useOtpLogin(onSuccess: (response: RefreshResponse) => void) {
  const { mutate: login, isLoading: loggingIn } = useMutation({
    mutationKey: ['login'],
    mutationFn: postOtpLogin,
    onSuccess(data) {
      onSuccess(data);
    },
  });

  return { login, loggingIn };
}

function useProfile(loggedIn: boolean) {
  const { data: user = null } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: loggedIn,
  });

  return user;
}

function useLogout(onSuccess: (response: null) => void) {
  const { mutate: logout, isLoading: loggingOut } = useMutation({
    mutationKey: ['logout'],
    mutationFn: postLogout,
    onSuccess() {
      onSuccess(null);
    },
  });

  return { logout, loggingOut };
}
