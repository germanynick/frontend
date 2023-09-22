// eslint-disable-next-line no-restricted-imports
import { createConfig, config } from '@gluestack-ui/themed';
import { defaultsDeep } from 'lodash';
import { colors } from './colors';
import { fontSizes, fonts, lineHeights, letterSpacings } from './typography';
import { space } from './space';
import * as components from './overrides';

const customTheme = {
  tokens: {
    colors,
    fonts,
    fontSizes,
    lineHeights,
    letterSpacings,
    space,
  },
  components,
};

export const theme = createConfig<typeof config.theme & typeof customTheme>(defaultsDeep(customTheme, config.theme));

// Get the type of Config
type ConfigType = typeof theme;

// Extend the internal styled config
declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType {}
}
