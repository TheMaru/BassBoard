import { Story, Meta } from '@storybook/react';
import React from 'react';

import {
  StringPitchControlArea,
  StringPitchControlAreaProps
} from './StringPitchControlArea';

export default {
  title: 'Components/StringPitchControlArea',
  component: StringPitchControlArea
} as Meta;

const Template: Story<StringPitchControlAreaProps> = props => (
  <StringPitchControlArea {...props} />
);

export const Default = Template.bind({});
Default.args = {};
