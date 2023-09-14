import { Stack } from 'expo-router';
import { ThemeProvider } from '@mylong.frontend/core-ui';
import '../global.css';

const AppLayout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
};

export default AppLayout;
