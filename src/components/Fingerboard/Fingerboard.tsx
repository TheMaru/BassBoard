import { Fret } from '../Fret/Fret';
import { NotePitch } from '../Note/Note.model';

export type FingerboardProps = {
  amountFrets?: number;
  stringRootNotes?: NotePitch[];
  stringSum?: number; // Todo implement change of amount of strings
  visibleNotes: NotePitch[];
};

export const Fingerboard = ({
  amountFrets = 21,
  stringRootNotes = [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G],
  visibleNotes,
}: FingerboardProps): JSX.Element => {
  const renderFrets = () => {
    const frets = [];
    for (let i = 1; i <= amountFrets; ++i) {
      frets.push(
        <Fret
          key={`fret-${i}`}
          fretNumber={i}
          stringRootNotes={stringRootNotes}
          visibleNotes={visibleNotes}
        />
      );
    }

    return frets;
  };

  return (
    <div className="root">
      <Fret
        fretNumber={0}
        stringRootNotes={stringRootNotes.reverse()}
        visibleNotes={visibleNotes}
      />
      <div className="nut" />
      {renderFrets()}
      <style jsx>{`
        .root {
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;
          background-color: var(--fingerboard-color);
          overflow-x: scroll;
          margin-top: 2em;
        }

        .nut {
          border-left: 0.15em solid #1b1b1b;
          border-right: 0.15em solid #1b1b1b;
        }
      `}</style>
    </div>
  );
};
