import { AppProps } from 'next/app';

import { NativeBaseProvider } from 'native-base';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default CustomApp;
