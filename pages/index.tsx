import Head from 'next/head';
import { Fret } from '../components/Fret/Fret';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bass Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>main content</h1>
        <Fret />
      </main>

      <footer>footer content</footer>
    </div>
  );
}
