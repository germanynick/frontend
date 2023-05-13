// babel.config.js
const { join } = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    // ['react-native-web', { commonjs: true }],
    ['nativewind/babel', { tailwindConfigPath: join(__dirname, 'tailwind.config.js') }],
  ],
};
