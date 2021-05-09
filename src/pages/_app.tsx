import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>League of Legends comparator</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;