import { Note, NoteProps } from './Note';
import { NotePitch } from './Note.model';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Note',
  component: Note,
};

const defaultArgs = {
  visible: true,
  note: NotePitch.E,
};

const Template: Story<NoteProps> = args => (
  <div className="story">
    <Note {...args} />
    <style jsx>{`
      .story {
        display: flex;
        align-items: center;
        height: 3em;
        background-color: var(--fingerboard-color);
      }
    `}</style>
  </div>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
