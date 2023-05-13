import { Button } from '@frontend/ui';

import { View, Text, Pressable } from 'react-native';
import { styled } from 'nativewind';

const BaseView = styled(View);
const BaseText = styled(Text);

const HomePage = () => {
  return (
    <div className="bg-blue-300">
      <Button />

      <Pressable onPress={() => console.log('HERE')}>
        <BaseView>
          <BaseText className="bg-blue-700">Welcome to button!</BaseText>
          <Text>Welcome to 2!</Text>
          <div className="bg-green-300">BBB</div>
        </BaseView>
      </Pressable>
    </div>
  );
};

export default HomePage;
