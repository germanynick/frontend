import { UserListContainer } from '@frontend/features/users';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
  return (
    <NativeBaseProvider>
      <UserListContainer />
    </NativeBaseProvider>
  );
};
