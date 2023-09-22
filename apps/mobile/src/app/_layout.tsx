import React from 'react';
import { Slot } from 'expo-router';
import { ThemeProvider } from '@mylong.frontend/core-ui';
import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { AppLayout as BaseAppLayout } from '@mylong.frontend/shared-components';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView>
        <BaseAppLayout>
          <Slot />
        </BaseAppLayout>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default AppLayout;
