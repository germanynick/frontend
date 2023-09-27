module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel', 'nativewind/babel'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
