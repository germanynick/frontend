//Please use this website to generate colors pallete
// https://smart-swatch.netlify.app/
import { Dictionary, get, mapKeys, mapValues } from 'lodash';

const PRIMARY_COLORS = {
  50: '#eceaff',
  100: '#D5D5EB',
  200: '#9e9de3',
  300: '#8282C2',
  400: '#514fc9',
  500: '#2F2E99',
  600: '#2a2989',
  700: '#1C1C5C',
  800: '#10123e',
  900: '#09091F',
};

const SECONDARY_COLORS = {
  50: '#ffe9dd',
  100: '#FFE6D5',
  200: '#ff9f7e',
  300: '#ED8E71',
  400: '#ff531a',
  500: '#FF4405',
  600: '#b42c00',
  700: '#BC1B06',
  800: '#4f1000',
  900: '#771A0D',
};

const SUCCESS_COLORS = {
  50: '#dfffef',
  100: '#D3F8DF',
  200: '#8bf1be',
  300: '#73E2A3',
  400: '#37e68d',
  500: '#16B364',
  600: '#149f59',
  700: '#087443',
  800: '#004524',
  900: '#095C37',
};

const WARNING_COLORS = {
  50: '#ffedde',
  100: '#FDEAD7',
  200: '#f8ad86',
  300: '#F7B27A',
  400: '#f06e29',
  500: '#EF6820',
  600: '#a8410a',
  700: '#B93815',
  800: '#491a00',
  900: '#772917',
};

const ERROR_COLORS = {
  50: '#ffe5e2',
  100: '#FEE4E2',
  200: '#f88f87',
  300: '#FDA29B',
  400: '#ef362a',
  500: '#F04438',
  600: '#a7150c',
  700: '#B42318',
  800: '#4a0601',
  900: '#7A271A',
};

const TEXT_COLORS = {
  50: '#fceff2',
  100: '#F5F5F5',
  200: '#c1bfbf',
  300: '#E5E5E5',
  400: '#8c8c8c',
  500: '#A3A3A3',
  600: '#595959',
  700: '#737373',
  800: '#292526',
  900: '#424242',
};

const INFO_COLORS = {
  50: '#dfeeff',
  100: '#D1E0FF',
  200: '#7eaaff',
  300: '#84ADFF',
  400: '#1a66ff',
  500: '#2970FF',
  600: '#003bb4',
  700: '#004EEB',
  800: '#001951',
  900: '#00359E',
};

const MYLONG_TOKENS = {
  VeryLight: 100, // Ex: $primaryVeryLight = $primary100
  Light: 300, // Ex: $primaryLight = $primary300
  Medium: 500, // Ex: $primaryMedium = $primary500
  Dark: 700, // Ex: $primaryDark = $primary700
  VeryDark: 900, // Ex: $primaryVeryDark = $primary900
};

const addKeyPrefix = <T>(colors: Dictionary<T>, prefix: string) => mapKeys(colors, (_, key) => `${prefix}${key}`);

const addMylongTokens = <T>(colors: Dictionary<T>, prefix: string) => {
  const tokens = mapValues(MYLONG_TOKENS, (value) => get(colors, value));

  return addKeyPrefix(tokens, prefix);
};

export const colors = {
  // OVERRIDE GLUESTACK TOKENS
  ...addKeyPrefix(PRIMARY_COLORS, 'primary'),
  ...addKeyPrefix(SECONDARY_COLORS, 'secondary'),
  ...addKeyPrefix(SUCCESS_COLORS, 'success'),
  ...addKeyPrefix(WARNING_COLORS, 'warning'),
  ...addKeyPrefix(ERROR_COLORS, 'error'),
  ...addKeyPrefix(INFO_COLORS, 'info'),
  ...addKeyPrefix(TEXT_COLORS, 'textDark'),
  ...addKeyPrefix(TEXT_COLORS, 'textLight'),

  // EXTRA MYLONG TOKENS
  ...addMylongTokens(PRIMARY_COLORS, 'primary'),
  ...addMylongTokens(SECONDARY_COLORS, 'secondary'),
  ...addMylongTokens(TEXT_COLORS, 'content'),
  ...addMylongTokens(SUCCESS_COLORS, 'success'),
  ...addMylongTokens(WARNING_COLORS, 'warning'),
  ...addMylongTokens(ERROR_COLORS, 'error'),
  ...addMylongTokens(INFO_COLORS, 'link'),

  backgroundPrimary: '#EEFBFF',
  backgroundSecondary: '#FFF9EF',
  backgroundTertiary: '#F5FFE9',
};
