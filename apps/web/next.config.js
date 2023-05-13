//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
// const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  experimental: {
    appDir: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };

    config.resolve.extensions = ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', ...config.resolve.extensions];

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withTM(['nativewind', 'react-native-web', 'react-native-svg']),
  withNx,
  // withExpo,
];

const config = composePlugins(...plugins)(nextConfig);

module.exports = config;
