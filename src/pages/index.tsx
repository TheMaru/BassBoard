import { Typography } from '@material-ui/core';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';

import { Fingerboard } from '../components/Fingerboard/Fingerboard';
import { Footer } from '../components/Footer/Footer';
import { NotePitch } from '../components/Note/Note.model';
import { ShowNotesControlArea } from '../components/ShowNotesControlArea/ShowNotesControlArea';

const Home = (): JSX.Element => {
  const stringRootNotes = [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G];
  const [visibleNotes, setVisibleNotes] = useState<NotePitch[]>([]);

  const toggleNote = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setVisibleNotes([...visibleNotes, event.target.value as NotePitch]);
    } else {
      setVisibleNotes(visibleNotes.filter(note => note !== event.target.value));
    }
  };

  return (
    <>
      <Head>
        <title>Bass Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" gutterBottom>
          Bass-Board
        </Typography>
        <ShowNotesControlArea
          toggleNote={toggleNote}
          visibleNotes={visibleNotes}
        />
        <Fingerboard
          amountFrets={15}
          stringRootNotes={stringRootNotes}
          visibleNotes={visibleNotes}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
