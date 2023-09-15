//Please use this website to generate colors pallete
// https://smart-swatch.netlify.app/
import { mapKeys } from 'lodash';

const PRIMARY_COLORS = {
  50: '#fbf4e2',
  100: '#eadec5',
  200: '#d9c8a4',
  300: '#c8b282',
  400: '#b99c60',
  500: '#b6985a',
  600: '#7c6536',
  700: '#594825',
  800: '#362b13',
  900: '#170d00',
};

const ERROR_COLORS = {
  50: '#ffe5e2',
  100: '#ffbab6',
  200: '#f88f87',
  300: '#f36258',
  400: '#ef362a',
  500: '#d51d10',
  600: '#a7150c',
  700: '#F04438',
  800: '#4a0601',
  900: '#200000',
};

const TEXTDARK_COLORS = {
  50: '#f8f0f2',
  100: '#d9d9d9',
  200: '#bfbfbf',
  300: '#a6a6a6',
  400: '#8c8c8c',
  500: '#737373',
  600: '#595959',
  700: '#404040',
  800: '#262626',
  900: '#120b0d',
};

export const colors = {
  ...mapKeys(PRIMARY_COLORS, (_, key) => `primary${key}`),
  ...mapKeys(ERROR_COLORS, (_, key) => `error${key}`),
  ...mapKeys(TEXTDARK_COLORS, (_, key) => `textDark${key}`),
};
