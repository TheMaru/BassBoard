import { Story } from '@storybook/react/types-6-0';
import { Fingerboard, FingerboardProps } from './Fingerboard';
import { NotePitch } from '../Note/Note.model';

export default {
  title: 'Components/Fingerboard',
  component: Fingerboard,
};

const defaultArgs: FingerboardProps = {};

const Template: Story<FingerboardProps> = args => <Fingerboard {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
