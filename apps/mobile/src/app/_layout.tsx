import { Stack } from 'expo-router';
import { ThemeProvider } from '@mylong.frontend/core-ui';

const AppLayout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
};

export default AppLayout;
