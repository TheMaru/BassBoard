import { Note } from '../Note/Note';
import { NotePitch, NoteSequence } from '../Note/Note.model';

export type FretProps = {
  fretNumber: number;
  stringRootNotes: NotePitch[];
};

const calculateNote = (stringRootNote: NotePitch, fretNumber: number) => {
  const indexOfRoot = NoteSequence.indexOf(stringRootNote);
  const noteIndex = indexOfRoot + fretNumber;
  if (noteIndex >= NoteSequence.length) {
    return NoteSequence[noteIndex % NoteSequence.length];
  }
  return NoteSequence[noteIndex];
};

export const Fret = ({
  fretNumber,
  stringRootNotes,
}: FretProps): JSX.Element => {
  const fretMarkers = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleFretMarkers = [12, 24];

  return (
    <div className="fret">
      {fretMarkers.includes(fretNumber) && <div className="fret-marker" />}
      {doubleFretMarkers.includes(fretNumber) && (
        <div className="double-fret-marker">
          <div className="marker1" />
          <div className="marker2" />
        </div>
      )}
      {stringRootNotes.map(stringRootNote => (
        <Note
          key={`${fretNumber}-${stringRootNote}`}
          visible
          note={calculateNote(stringRootNote, fretNumber)}
        />
      ))}
      <style jsx>{`
        .fret {
          position: relative;
          flex: 1 1 auto;
        }

        .fret:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 0.3em;
          background-color: #1b1b1b;
        }

        .fret-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          height: 2em;
          width: 2em;
          border-radius: 1em;
        }

        .double-fret-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 75%;
        }

        .marker1,
        .marker2 {
          position: absolute;
          left: 50%;
          background-color: #fff;
          height: 2em;
          width: 2em;
          border-radius: 1em;
          transform: translate(-50%, -50%);
        }

        .marker1 {
          top: 25%;
        }

        .marker2 {
          top: 75%;
        }
      `}</style>
    </div>
  );
};
