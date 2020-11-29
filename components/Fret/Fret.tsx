import { Note } from '../Note/Note';
import { NotePitch } from '../Note/Note.model';

export const Fret = () => (
  <div>
    <h1>1 Fret</h1>
    <div>with G String</div>
    <div>with D String</div>
    <div>with A String</div>
    <div>with E String</div>
    <Note visible note={NotePitch.E} />
  </div>
);
