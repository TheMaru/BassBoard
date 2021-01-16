import Head from 'next/head';
import { NotePitch } from '../components/Note/Note.model';
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
        <Fret
          fretNumber={0}
          stringRootNotes={[NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G]}
        />
      </main>

      <footer>footer content</footer>
    </div>
  );
}
