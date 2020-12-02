import { Note } from '../Note/Note';
import { NotePitch } from '../Note/Note.model';

interface FretProps {
  fret: number;
}

export const Fret = ({ fret }: FretProps) => {
  console.log(fret);
  const fretMarkers = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleFretMarkers = [12, 24];
  return (
    <div className="root">
      {fretMarkers.includes(fret) && <div className="fret-marker"></div>}
      {doubleFretMarkers.includes(fret) && (
        <div className="double-fret-marker">
          <div className="marker1"></div>
          <div className="marker2"></div>
        </div>
      )}
      <Note visible note={NotePitch.G} />
      <Note visible note={NotePitch.D} />
      <Note visible note={NotePitch.A} />
      <Note visible note={NotePitch.E} />
      <style jsx>{`
        .root {
          position: relative;
          background-color: brown;
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
