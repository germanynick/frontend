import React from 'react';

import { View, Text, Pressable } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <Pressable onPress={() => console.log('HERE')}>
      <View className="bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Text className="text-white">Welcome to button!</Text>
      </View>
    </Pressable>
  );
}

export default Button;
