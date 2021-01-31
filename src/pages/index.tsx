import Head from 'next/head';

import { Fingerboard } from '../components/Fingerboard/Fingerboard';
import { NotePitch } from '../components/Note/Note.model';

const Home = (): JSX.Element => {
  const stringRootNotes = [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G];

  return (
    <div>
      <Head>
        <title>Bass Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>main content</h1>
        <Fingerboard amountFrets={15} stringRootNotes={stringRootNotes} />
      </main>

      <footer>footer content</footer>
    </div>
  );
};

export default Home;
