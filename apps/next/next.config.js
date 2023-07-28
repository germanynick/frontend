//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withExpo } = require('@expo/next-adapter');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: [
    'solito',
    'react-native',
    'expo',
    '@expo/vector-icons',
    'react-native-vector-icons',
    '@react-native-aria',
    'react-native-safe-area-context',
    'react-native-web',
    'react-native-svg',
    'native-base',
    '@native-base/next-adapter',
    //
    'app',
  ],
  experimental: {
    forceSwcTransforms: true,
    scrollRestoration: true,
    legacyBrowsers: false,
  },
  // We already do linting on GH actions
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = composePlugins(withExpo, withNx)(nextConfig);
