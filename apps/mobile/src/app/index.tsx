import { SignInContainer } from '@mylong.frontend/features-signin';
import { Text, View } from 'react-native';

export function Index() {
  return (
    <>
      <SignInContainer />

      <View className="border-2 p-1.5 border-red-600">
        <Text className="text-cyan-500 underline">BBB</Text>
      </View>
    </>
  );
}

export default Index;
