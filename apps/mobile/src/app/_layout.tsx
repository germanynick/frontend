import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@mylong.frontend/core-ui';
import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter';

const AppLayout = () => {
  const [fontLoaded] = useFonts({
    Inter: Inter_500Medium,
  });

  if (!fontLoaded) {
    // TODO: Flash Screen
    return null;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
};

export default AppLayout;
