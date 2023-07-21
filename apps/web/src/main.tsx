import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NativeBaseProvider } from 'native-base';
import { UserPage } from './pages/UserPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <NativeBaseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="users/*" Component={UserPage} />
        </Routes>
      </BrowserRouter>
    </NativeBaseProvider>
  </StrictMode>
);
