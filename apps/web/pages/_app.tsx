import { AppProps } from 'next/app';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { theme } from '@mylong.frontend/core-styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <GluestackUIProvider config={theme}>
      <Component {...pageProps} />
    </GluestackUIProvider>
  );
}

export default App;
