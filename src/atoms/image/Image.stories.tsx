import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Image from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  variation: 'Circle',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  variation: 'Rounded',
};

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  color: 'Primary',
};

export const PrimaryCircle = Template.bind({});
PrimaryCircle.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  color: 'Primary',
  variation: 'Circle',
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  color: 'Primary',
  variation: 'Rounded',
};

export const Secondary = Template.bind({});
Secondary.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  color: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  src: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
  color: 'Tertiary',
};
