//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withGluestackUI } = require('@gluestack/ui-next-adapter');
const { withExpo } = require('@expo/next-adapter');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'react-native-svg',
    '@react-native-aria',
    '@expo',
    '@legendapp',
    '@gluestack-ui',
    '@gluestack-ui/themed',
    '@gluestack-style',
    'expo-linear-gradient',
  ],
};

const plugins = [
  withGluestackUI,
  withExpo,
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
