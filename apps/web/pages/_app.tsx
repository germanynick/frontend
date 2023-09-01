import { AppProps } from 'next/app';
import { config, GluestackUIProvider } from '@gluestack-ui/themed';

function App({ Component, pageProps }: AppProps) {
  return (
    <GluestackUIProvider config={config.theme}>
      <Component {...pageProps} />
    </GluestackUIProvider>
  );
}

export default App;
