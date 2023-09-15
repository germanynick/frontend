import { AppProps } from 'next/app';
import { ThemeProvider } from '@mylong.frontend/core-ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
