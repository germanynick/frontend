import { extendTheme } from 'native-base';
import * as components from './components';
import { colors } from './colors';

export const theme = extendTheme({
  colors,
  components: { ...components }, // HACK: convert Module to Object
});

// 2. Get the type of the CustomTheme
export type ITheme = typeof theme;
