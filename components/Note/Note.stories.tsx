import { Note } from './Note';

export default {
  title: 'Components/Note',
  component: Note,
};

const defaultArgs = {
  visible: true,
  note: 'E',
};

const Template = args => <Note {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
