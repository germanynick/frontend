import { SignInContainer } from '@mylong.frontend/features-signin';

import { Text, View } from 'react-native';

export function Index() {
  return (
    <>
      <Text className="text-cyan-500 underline">Hello</Text>
      <p className="text-cyan-500 underline">Hello2</p>
      <SignInContainer />
    </>
  );
}

export default Index;
