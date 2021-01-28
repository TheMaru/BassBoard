export enum NotePitch {
  A = 'A',
  AB_HALF = 'A\u266F/B\u266D',
  B = 'B',
  C = 'C',
  CD_HALF = 'C\u266F/D\u266D',
  D = 'D',
  DE_HALF = 'D\u266F/E\u266D',
  E = 'E',
  F = 'F',
  FG_HALF = 'F\u266F/G\u266D',
  G = 'G',
  GA_HALF = 'G\u266F/A\u266D',
}

export const NoteSequence: NotePitch[] = [
  NotePitch.A,
  NotePitch.AB_HALF,
  NotePitch.B,
  NotePitch.C,
  NotePitch.CD_HALF,
  NotePitch.D,
  NotePitch.DE_HALF,
  NotePitch.E,
  NotePitch.F,
  NotePitch.FG_HALF,
  NotePitch.G,
  NotePitch.GA_HALF,
];
