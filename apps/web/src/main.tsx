import 'reflect-metadata';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NativeBaseProvider, Box } from 'native-base';
import { UserPage } from './pages/UserPage';
import { theme } from '@frontend/core/styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <NativeBaseProvider theme={theme}>
      <Box height="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="users/*" Component={UserPage} />
          </Routes>
        </BrowserRouter>
      </Box>
    </NativeBaseProvider>
  </StrictMode>
);
