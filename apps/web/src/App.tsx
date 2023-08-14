import { FC, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NativeBaseProvider, Box } from 'native-base';
import { UserPage } from './pages/UserPage';
import { theme } from '@frontend/core/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@frontend/core/services';

export const App: FC = () => {
  const ref = useRef(getQueryClient());

  return (
    <QueryClientProvider client={ref.current}>
      <NativeBaseProvider theme={theme}>
        <Box height="100vh">
          <BrowserRouter>
            <Routes>
              <Route path="users/*" Component={UserPage} />
            </Routes>
          </BrowserRouter>
        </Box>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
