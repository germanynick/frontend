const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { merge } = require('webpack-merge');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), async (config, context) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  const expoConfig = await createExpoWebpackConfigAsync({ mode: context.configuration });

  return merge(expoConfig, config);
});
