import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { FunctionComponent } from 'react';
import { theme } from '@frontend/core/styles';
import { UserListContainer } from '@frontend/features/users';
import { SafeAreaView } from 'react-native';

export const App: FunctionComponent = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <UserListContainer />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
