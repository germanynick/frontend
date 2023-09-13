// eslint-disable-next-line no-restricted-imports
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { FC, ReactNode } from 'react';
import { theme } from './theme';

export interface IThemeProvider {
  children?: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  return <GluestackUIProvider config={theme}>{children}</GluestackUIProvider>;
};
