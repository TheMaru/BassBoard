import { Story } from '@storybook/react/types-6-0';

import { NotePitch } from '../Note/Note.model';
import { Fret, FretProps } from './Fret';

export default {
  title: 'Components/Fret',
  component: Fret,
};

const defaultArgs = {
  fretNumber: 1,
  stringRootNotes: [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G],
  visibleNotes: [],
};

const Template: Story<FretProps> = args => <Fret {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const SinglePointFret = Template.bind({});
SinglePointFret.args = { ...defaultArgs, fretNumber: 3 };

export const DoublePointFret = Template.bind({});
DoublePointFret.args = { ...defaultArgs, fretNumber: 12 };
