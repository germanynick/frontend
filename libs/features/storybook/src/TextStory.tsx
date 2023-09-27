import { HStack, Slide, Text, VStack } from '@mylong.frontend/core-ui';
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
    <Slide isOpen="true">
      <VStack space="md">
        {TYPES.map((size, index) => (
          <HStack key={index} space="md">
            <Text size={size}>{String(size)} For Example</Text>
          </HStack>
        ))}
      </VStack>
    </Slide>
  );
};
