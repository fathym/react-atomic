import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BasicCallToAction from './Basic';
import Action from '../../../atoms/action/Action';
import ActionModel from '../../../atoms/action/ActionModel';

export default {
  title: 'Molecules/Calls to Action/Basic',
  component: BasicCallToAction,
  argTypes: {},
} as ComponentMeta<typeof BasicCallToAction>;

const Template: ComponentStory<typeof BasicCallToAction> = (args) => (
  <BasicCallToAction {...args} />
);

const cta: ActionModel = {
  Action: action('Call to Action Clicked', { depth: 1 }),
  Label: 'Hello',
};

export const Simple = Template.bind({});
Simple.args = {
  image:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  title: 'Call to Action',
  callToAction:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.',
  children: (
    <Action
      action={cta}
      color="Primary"
      variation="Solid"
      tails="text-gray-100 w-full"
    />
  ),
};

export const Hyland = Template.bind({});
Hyland.args = {
  image: 'https://www.fathym.com/templates/hyland/Hyland_logo.jpg',
  title: 'Call to Action',
  callToAction:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.',
  children: (
    <Action action={cta} color="Primary" variation="Solid" tails=" w-full" />
  ),
};
