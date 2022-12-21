const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.fuchsia,
        tertiary: colors.indigo,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
