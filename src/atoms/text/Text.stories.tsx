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
  className: 'text-2xl line-through',
};

export const SimpleH1 = Template.bind({});
SimpleH1.args = {
  children: 'Simple h1',
  className: 'text-3xl font-bold underline',
  element: 'h1',
};
