import { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from './styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default MyApp;
