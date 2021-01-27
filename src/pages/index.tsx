import Head from 'next/head';

import { Fret } from '../components/Fret/Fret';
import { NotePitch } from '../components/Note/Note.model';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Bass Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>main content</h1>
        <Fret
          fretNumber={0}
          stringRootNotes={[NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G]}
        />
      </main>

      <footer>footer content</footer>
    </div>
  );
}
