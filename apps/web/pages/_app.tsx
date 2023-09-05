import { AppProps } from 'next/app';
import { ThemeProvider } from '@mylong.frontend/core-styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
