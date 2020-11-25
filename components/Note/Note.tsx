import { NoteType } from './Note.models';

export const Note = ({ visible, note }: NoteType) => (
  <div>{visible ? note : null}</div>
);
