import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Action from './Action';

export default {
  title: 'Atoms/Action',
  component: Action,
  argTypes: {},
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  className: 'text-3xl',
};

export const SimpleHref = Template.bind({});
SimpleHref.args = {
  action: {
    Action: '/',
    Label: 'Hello',
  },
  target: '_blank',
  className: 'text-3xl',
};
