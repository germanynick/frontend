module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
