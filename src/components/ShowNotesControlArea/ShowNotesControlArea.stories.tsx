import { Story, Meta } from '@storybook/react/types-6-0';
import { ChangeEvent, useState } from 'react';

import { NotePitch } from '../Note/Note.model';
import {
  ShowNotesControlArea,
  ShowNotesControlAreaProps
} from './ShowNotesControlArea';

export default {
  component: ShowNotesControlArea,
  title: 'Components/ShowNotesControlArea'
} as Meta;

export const Default: Story<ShowNotesControlAreaProps> = () => {
  const [visibleNotes, setVisibleNotes] = useState<NotePitch[]>([]);
  const toggleNote = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setVisibleNotes([...visibleNotes, event.target.value as NotePitch]);
    } else {
      setVisibleNotes(visibleNotes.filter(note => note !== event.target.value));
    }
  };

  return (
    <ShowNotesControlArea visibleNotes={visibleNotes} toggleNote={toggleNote} />
  );
};
