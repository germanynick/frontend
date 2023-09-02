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

export const colors = {
  ...mapKeys(PRIMARY_COLORS, (_, key) => `primary${key}`),
};
