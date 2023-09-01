import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';

const AppLayout = () => {
  return (
    <GluestackUIProvider config={config.theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
};

export default AppLayout;
