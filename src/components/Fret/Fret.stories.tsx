import { Fret, FretProps } from './Fret';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Fret',
  component: Fret,
};

const defaultArgs = {
  fret: 1,
};

const Template: Story<FretProps> = args => <Fret {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const SinglePointFret = Template.bind({});
SinglePointFret.args = { ...defaultArgs, fretNumber: 3 };

export const DoublePointFret = Template.bind({});
DoublePointFret.args = { ...defaultArgs, fretNumber: 12 };
