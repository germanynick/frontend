import React from 'react';
import { AppRegistry } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { UserListContainer } from '@frontend/features/users';

AppRegistry.registerComponent('Mobile', () => (
  <NativeBaseProvider>
    <UserListContainer />
  </NativeBaseProvider>
));
