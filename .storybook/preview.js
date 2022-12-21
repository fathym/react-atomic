import React from 'react';
import TailwindContext from '../src/common/TailwindContext';
import '../src/tailwind.css';
import './storybook.css';
// import { themes } from '@storybook/theming';

export const globalTypes = {
  darkMode: true,
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // docs: {
  //   theme: themes.light,
  // },
};

export const decorators = [
  (Story) => (
    <TailwindContext >
      <Story />
    </TailwindContext>
  ),
];
