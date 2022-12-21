import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  placeholder: 'Placeholder',
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
  style: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Placeholder',
  style: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  placeholder: 'Placeholder',
  style: 'Tertiary',
};
