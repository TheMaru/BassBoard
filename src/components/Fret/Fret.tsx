import { Note } from '../Note/Note';
import { NotePitch, NoteSequence } from '../Note/Note.model';

export type FretProps = {
  fretNumber: number;
  stringRootNotes: NotePitch[];
};

export const calculateNote = (
  stringRootNote: NotePitch,
  fretNumber: number
): NotePitch => {
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
          min-width: 4em;
          border-left: 2px solid #1b1b1b;
          border-right: 2px solid #1b1b1b;
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
          top: 20%;
        }

        .marker2 {
          top: 80%;
        }
      `}</style>
    </div>
  );
};
