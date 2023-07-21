import { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';
import { theme } from '@frontend/core/styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider theme={theme}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default CustomApp;
