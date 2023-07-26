import { useTheme as useBaseTheme } from 'native-base';
import { ITheme } from './theme';

export const useTheme = (): ITheme => {
  return useBaseTheme();
};
