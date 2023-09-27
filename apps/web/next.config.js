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
    'nativewind',
    'react-native-css-interop',
    'react-native',
    'react-native-web',
    'react-native-svg',
    '@react-native-aria',
    '@expo',
    '@legendapp',
    '@legendapp/motion',
    '@gluestack-ui',
    '@gluestack-ui/themed',
    '@gluestack-style/*',
    '@gluestack-style/react',
    '@gluestack-style/provider',
    '@gluestack-style/animation-plugin',
    'expo-linear-gradient',
    'lucide-react-native',
    'react-native-safe-area-context',
    'ahooks',
  ],
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.extensions = ['.next.ts', '.next.tsx', 'next.js', 'next.jsx', ...(config.resolve.extensions ?? [])];

    return config;
  },
};

const plugins = [
  withGluestackUI,
  withExpo,
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
