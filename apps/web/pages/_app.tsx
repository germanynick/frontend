import { AppProps } from 'next/app';
import { ThemeProvider } from '@mylong.frontend/core-ui';
import { AppLayout } from './_layout';

import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? ((page: any) => <AppLayout>{page}</AppLayout>);

  return <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}

export default App;
