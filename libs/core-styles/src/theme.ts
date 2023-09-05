// eslint-disable-next-line no-restricted-imports
import { createConfig, config } from '@gluestack-ui/themed';
import { defaultsDeep } from 'lodash';
import { colors } from './colors';
import * as components from './components';

export const theme = createConfig<typeof config.theme>(
  defaultsDeep(
    {
      tokens: {
        colors,
      },
      components,
    },
    config.theme,
  ),
);
