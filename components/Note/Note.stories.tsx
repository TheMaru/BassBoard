import { Note } from './Note';

export default {
  title: 'Components/Note',
  component: Note,
};

const defaultArgs = {
  visible: true,
  note: 'E',
};

const Template = args => (
  <div className="story">
    <Note {...args} />
    <style jsx>{`
      .story {
        display: flex;
        align-items: center;
        height: 3em;
        background-color: #968455;
      }
    `}</style>
  </div>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
