import { Fret } from './Fret';

export default {
  title: 'Components/Fret',
  component: Fret,
};

const Template = args => <Fret {...args} />;

export const Default = Template.bind({});
Default.args = {};
