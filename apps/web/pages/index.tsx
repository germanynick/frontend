import { Button } from '@frontend/ui';

import { View, Text, Pressable } from 'react-native';

const HomePage = () => {
  return (
    <div className="bg-blue-300">
      <Button />

      <Pressable onPress={() => console.log('HERE')}>
        <View>
          <Text className="bg-blue-700">Welcome to button!</Text>
          <Text>Welcome to 2!</Text>
          <div className="bg-green-300">BBB</div>
        </View>
      </Pressable>
    </div>
  );
};

export default HomePage;
