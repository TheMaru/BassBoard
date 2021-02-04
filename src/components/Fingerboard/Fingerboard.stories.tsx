import { Story } from '@storybook/react/types-6-0';

import { NotePitch } from '../Note/Note.model';
import { Fingerboard, FingerboardProps } from './Fingerboard';

export default {
  title: 'Components/Fingerboard',
  component: Fingerboard,
};

const defaultArgs: FingerboardProps = {
  amountFrets: 15,
  stringRootNotes: [NotePitch.E, NotePitch.A, NotePitch.D, NotePitch.G],
  visibleNotes: [],
};

const Template: Story<FingerboardProps> = args => <Fingerboard {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
