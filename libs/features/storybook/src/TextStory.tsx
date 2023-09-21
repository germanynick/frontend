import { HStack, Text, VStack } from '@mylong.frontend/core-ui';
import { ComponentProps } from 'react';

const TYPES: ComponentProps<typeof Text>['size'][] = [
  'title1',
  'title2',
  'title3',
  'subTitle1',
  'subTitle2',
  'subTitle3',
  'body1',
  'body2',
  'body3',
];

export const TextStory = () => {
  return (
    <VStack space="md">
      {TYPES.map((size) => (
        <HStack key={size} space="md">
          <Text size={size}>{size} For Example</Text>
        </HStack>
      ))}
    </VStack>
  );
};
