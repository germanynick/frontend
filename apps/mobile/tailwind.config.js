const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'content-light': '#E5E5E5',
        'content-medium': '#A3A3A3',
        'content-very-dark': '#424242',
        'primary-very-light': '#E4E6FF',
        'primary-light': '#AAB0FF',
        'primary-medium': '#2D3293',
      },
      fontFamily: {
        sans: ['"Inter"'],
        body: ['"Inter"'],
      },
    },
  },

  presets: [require('nativewind/preset').default],
};
