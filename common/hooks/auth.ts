/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useRecoilValue } from 'recoil';

import { useAuth } from '@/context/auth';

export const useNotLoggedIn = () => {
  const router = useRouter();
  const { loggingIn } = useAuth();

  useEffect(() => {
    if (loggingIn) {
      router.push('/features');
    }
  }, [loggingIn, router]);
};

export const useLoggedIn = () => {
  const router = useRouter();
  const { loggingIn } = useAuth();

  useEffect(() => {
    if (!loggingIn) router.push('/register');
  }, [loggingIn, router]);
};
