import { ITheme } from './theme';

export * from './theme';
export * from './useTheme';

declare module 'native-base' {
  interface ICustomTheme extends ITheme {}
}
