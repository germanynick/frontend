import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';
import { theme } from '@mylong.frontend/core-styles';

const AppLayout = () => {
  return (
    <GluestackUIProvider config={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
};

export default AppLayout;
