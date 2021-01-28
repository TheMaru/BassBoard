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
        width: 100%;
        margin: 1em 0;
      }

      .text {
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        z-index: 1;
        text-shadow: 0 0 5px #000;
      }

      .string {
        position: absolute;
        height: 50%;
        width: 100%;
        top: 0.25em;
        background-color: var(--string-color);
      }
    `}</style>
  </div>
);
