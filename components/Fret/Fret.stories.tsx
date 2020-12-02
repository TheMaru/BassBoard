import { Fret } from './Fret';

export default {
  title: 'Components/Fret',
  component: Fret,
};

const defaultArgs = {
  fret: 1,
};

const Template = args => <Fret {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const SinglePointFret = Template.bind({});
SinglePointFret.args = { ...defaultArgs, fret: 3 };

export const DoublePointFret = Template.bind({});
DoublePointFret.args = { ...defaultArgs, fret: 12 };
