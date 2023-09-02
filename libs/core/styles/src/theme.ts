import { createConfig, config } from '@gluestack-ui/themed';
import { defaultsDeep } from 'lodash';
import { colors } from './colors';
import { components } from './components';

export const theme = createConfig(
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
