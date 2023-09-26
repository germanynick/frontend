import React, { useCallback } from 'react';
import { Slot, Stack } from 'expo-router';
import { Slide, ThemeProvider } from '@mylong.frontend/core-ui';
import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { AppLayout as BaseAppLayout } from '@mylong.frontend/shared-components';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [fontLoaded] = useFonts({
    Inter: Inter_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaView onLayout={onLayoutRootView}>
          <BaseAppLayout>
            <Slot />
          </BaseAppLayout>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppLayout;
