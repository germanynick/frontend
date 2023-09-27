module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel', 'nativewind/babel'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
          importSource: 'nativewind',
        },
      ],
    ],
  };
};
