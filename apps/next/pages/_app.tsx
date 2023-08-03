import { AppProps } from 'next/app';
import { NativeBaseProvider, Box } from 'native-base';
import { theme } from '@frontend/core/styles';
import { DehydratedState, Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@frontend/core/services';

export interface IPageProps {
  dehydratedState: DehydratedState;
}

function CustomApp({ Component, pageProps }: AppProps<IPageProps>) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <NativeBaseProvider theme={theme} isSSR={true}>
          <Box height="100vh">
            <Component {...pageProps} />
          </Box>
        </NativeBaseProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
