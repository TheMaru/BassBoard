import { AppProps } from 'next/app';

import { globalStyles } from './styles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

export default MyApp;
