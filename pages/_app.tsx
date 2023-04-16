import '@/styles/globals.css';
import '../common/styles/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';

import theme from '@/theme';
import AuthProvider from '@/context/auth/AuthProvider';
import MainLayout from '@/common/layouts/main';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Head>
            <title>Box AI</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
