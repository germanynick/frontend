import { AppProps } from 'next/app';
import { ThemeProvider } from '@mylong.frontend/core-ui';

import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}

export default App;
