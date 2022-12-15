import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Action from '../../../atoms/action/Action';
import { ActionModel } from '../../../atoms/action';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Action',
  component: Action,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    action: new ActionModel(),
  },
} as ComponentMeta<typeof Action>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  action: {
    Action: async () => alert('Clicked'),
    Label: 'Hello',
  },
};
