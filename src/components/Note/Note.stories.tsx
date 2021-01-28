import { Story } from '@storybook/react/types-6-0';

import { Note, NoteProps } from './Note';
import { NotePitch } from './Note.model';

export default {
  component: Note,
  title: 'Components/Note',
};

const defaultArgs = {
  note: NotePitch.E,
  visible: true,
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
