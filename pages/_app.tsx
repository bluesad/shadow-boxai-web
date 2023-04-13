import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import theme from '@/theme';
import AuthProvider from '@/context/auth/AuthProvider';

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
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
