/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./public/tailwind/fathym.presets.js')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './.storybook/preview-body.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
