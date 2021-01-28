import { Fret } from '../Fret/Fret';
import { NotePitch } from '../Note/Note.model';

export type FingerboardProps = {
  amountFrets?: number;
  stringRootNotes?: NotePitch[];
  stringSum?: number;
};

export const Fingerboard = ({
  amountFrets = 21,
  stringRootNotes = [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G],
}: FingerboardProps): JSX.Element => {
  const renderFrets = () => {
    const frets = [];
    for (let i = 1; i <= amountFrets; ++i) {
      frets.push(
        <Fret
          key={`fret-${i}`}
          fretNumber={i}
          stringRootNotes={stringRootNotes}
        />
      );
    }

    return { frets };
  };

  return (
    <div className="root">
      <Fret fretNumber={0} stringRootNotes={stringRootNotes.reverse()} />
      <div className="nut" />
      {renderFrets()}
      <style jsx>{`
        .root {
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;
          background-color: var(--fingerboard-color);
        }

        .nut {
          background-color: #1b1b1b;
          width: 1em;
        }
      `}</style>
    </div>
  );
};
