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

export const Text = Template.bind({});
Text.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
};

export const TextHref = Template.bind({});
TextHref.args = {
  action: {
    Action: '/',
    Label: 'Hello',
  },
  target: '_blank',
};

export const SmallText = Template.bind({});
SmallText.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  size: 'Small',
};

export const LargeText = Template.bind({});
LargeText.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  size: 'Large',
};

export const BLAMText = Template.bind({});
BLAMText.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  size: 'BLAM',
};

export const Solid = Template.bind({});
Solid.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  variation: 'Solid',
};

export const SolidPrimary = Template.bind({});
SolidPrimary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Primary',
  variation: 'Solid',
};

export const SolidSecondary = Template.bind({});
SolidSecondary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Secondary',
  variation: 'Solid',
};

export const SolidTertiary = Template.bind({});
SolidTertiary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Tertiary',
  variation: 'Solid',
};

export const SolidPrimaryCustomClasses = Template.bind({});
SolidPrimaryCustomClasses.args = {
  action: {
    Action: action('Hello Clicked', { depth: 1 }),
    Label: 'Hello',
  },
  color: 'Primary',
  variation: 'Solid',
  className: 'text-gray-100',
};

export const Outline = Template.bind({});
Outline.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  variation: 'Outline',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Primary',
  variation: 'Outline',
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Secondary',
  variation: 'Outline',
};

export const OutlineTertiary = Template.bind({});
OutlineTertiary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Tertiary',
  variation: 'Outline',
};

export const Link = Template.bind({});
Link.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  variation: 'Link',
};

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Primary',
  variation: 'Link',
};

export const LinkSecondary = Template.bind({});
LinkSecondary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Secondary',
  variation: 'Link',
};

export const LinkTertiary = Template.bind({});
LinkTertiary.args = {
  action: {
    Action: action('Hello Clicked'),
    Label: 'Hello',
  },
  color: 'Tertiary',
  variation: 'Link',
};
