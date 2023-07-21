import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { FunctionComponent } from 'react';
import { theme } from '@frontend/core/styles';
import { UserListContainer } from '@frontend/features/users';

export const App: FunctionComponent = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <UserListContainer />
    </NativeBaseProvider>
  );
};
