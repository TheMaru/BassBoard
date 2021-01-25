import { NotePitch } from '../Note/Note.model';
import { Fret } from '../Fret/Fret';

export interface FingerboardProps {
  amountFrets?: number;
  stringRootNotes?: Array<NotePitch>;
  stringSum?: number;
}

export const Fingerboard = ({
  amountFrets = 21,
  stringRootNotes = [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G],
}: FingerboardProps) => {
  const renderFrets = () => {
    let frets = [];
    for (let i = 1; i <= amountFrets; ++i) {
      frets.push(
        <Fret
          key={`fret-${i}`}
          fretNumber={i}
          stringRootNotes={stringRootNotes}
        />
      );
    }

    return <>{frets}</>;
  };

  return (
    <div className="root">
      <Fret fretNumber={0} stringRootNotes={stringRootNotes.reverse()} />
      <div className="nut"></div>
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
