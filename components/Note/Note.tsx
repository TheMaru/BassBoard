import { NoteType } from './Note.model';

export const Note = ({ visible, note }: NoteType) => (
  <div className="root">
    <div className="string"></div>
    {visible && <span className="text">{note}</span>}
    <style jsx>{`
      .root {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .text {
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        z-index: 1;
      }

      .string {
        position: absolute;
        height: 50%;
        width: 100%;
        top: 0.25em;
        background-color: #666666;
      }
    `}</style>
  </div>
);
