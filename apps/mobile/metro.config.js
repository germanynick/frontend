const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });
const EXTENSIONS = ['expo.ts', 'expo.tsx', 'expo.js', 'expo.jsx', 'svg'];

module.exports = (async () => {
  defaultConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg');
  defaultConfig.resolver.sourceExts = [...EXTENSIONS, ...defaultConfig.resolver.sourceExts];

  console.log(defaultConfig.resolver.sourceExts);

  const nxConfig = await withNxMetro(defaultConfig, {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: [EXTENSIONS],
    // the project root to start the metro server
    projectRoot: __dirname,
    // Specify any additional (to projectRoot) watch folders, this is used to know which files to watch
    watchFolders: [],
  });

  console.log(nxConfig.resolver.sourceExts);
  return nxConfig;
})();
