import { AppProps } from 'next/app';
import { ThemeProvider } from '@mylong.frontend/core-ui';
import './global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
