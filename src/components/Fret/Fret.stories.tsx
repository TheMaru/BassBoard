import { Fret, FretProps } from './Fret';
import { NotePitch } from '../Note/Note.model';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Fret',
  component: Fret,
};

const defaultArgs = {
  fretNumber: 1,
  stringRootNotes: [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G],
};

const Template: Story<FretProps> = args => <Fret {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const SinglePointFret = Template.bind({});
SinglePointFret.args = { ...defaultArgs, fretNumber: 3 };

export const DoublePointFret = Template.bind({});
DoublePointFret.args = { ...defaultArgs, fretNumber: 12 };
