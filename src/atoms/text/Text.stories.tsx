import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Text from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'Simple Text',
  color: 'Primary',
  classes: 'text-2xl line-through',
};

export const SimpleH1 = Template.bind({});
SimpleH1.args = {
  children: 'Simple h1',
  classes: 'text-3xl font-bold underline',
  element: 'h1',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Simple Text',
  classes: '',
  color: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Simple Text',
  classes: '',
  color: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Simple Text',
  classes: '',
  color: 'Tertiary',
};
