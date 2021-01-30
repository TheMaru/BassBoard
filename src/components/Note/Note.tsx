import { NotePitch } from './Note.model';

export type NoteProps = {
  visible: boolean;
  note: NotePitch;
};

export const Note = ({ visible, note }: NoteProps): JSX.Element => (
  <div className="root">
    <div className="string" />
    {visible && <span className="text">{note}</span>}
    <style jsx>{`
      .root {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4em;
      }

      .text {
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        z-index: 1;
        text-shadow: 0 0 5px #000;
        font-size: 0.8em;
      }

      .string {
        position: absolute;
        height: 0.5em;
        width: 100%;
        background-color: var(--string-color);
      }
    `}</style>
  </div>
);
