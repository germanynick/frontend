import { AppProps } from 'next/app';
import { NativeBaseProvider, Box } from 'native-base';
import { theme } from '@frontend/core/styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider theme={theme}>
      <Box height="100vh">
        <Component {...pageProps} />
      </Box>
    </NativeBaseProvider>
  );
}

export default CustomApp;
