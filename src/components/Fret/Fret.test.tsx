import { NotePitch } from '../Note/Note.model';
import { calculateNote } from './Fret';

describe('Fret', () => {
  describe('function calculateNote:', () => {
    describe('returns Correct note for RootNote: E', () => {
      const rootNote = NotePitch.E;

      it('fret 0 should be E', () => {
        expect(calculateNote(rootNote, 0)).toBe(NotePitch.E);
      });

      it('fret 3 should be G', () => {
        expect(calculateNote(rootNote, 3)).toBe(NotePitch.G);
      });

      it('fret 6 should be AB_HALF', () => {
        expect(calculateNote(rootNote, 6)).toBe(NotePitch.AB_HALF);
      });

      it('fret 12 should be E', () => {
        expect(calculateNote(rootNote, 12)).toBe(NotePitch.E);
      });

      it('fret 18 should be G', () => {
        expect(calculateNote(rootNote, 18)).toBe(NotePitch.AB_HALF);
      });

      it('fret 25 should be F', () => {
        expect(calculateNote(rootNote, 25)).toBe(NotePitch.F);
      });
    });
  });
});
