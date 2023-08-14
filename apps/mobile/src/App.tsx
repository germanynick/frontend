import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { FC } from 'react';
import { theme } from '@frontend/core/styles';
import { UserListContainer } from '@frontend/features/users';
import { SafeAreaView } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@frontend/core/services';

export const App: FC = () => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <SafeAreaView>
          <UserListContainer />
        </SafeAreaView>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
