// eslint-disable-next-line no-restricted-imports
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import { theme } from './theme';

export interface IThemeProvider {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return <GluestackUIProvider config={theme}>{children}</GluestackUIProvider>;
};
