import { HStack, Heading, Slide, VStack } from '@mylong.frontend/core-ui';
import { ComponentProps } from 'react';

const TYPES: ComponentProps<typeof Heading>['size'][] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const FONT_WEIGHTS: ComponentProps<typeof Heading>['fontWeight'][] = [
  '$hairline',
  '$thin',
  '$light',
  '$normal',
  '$medium',
  '$semibold',
  '$bold',
  '$extrabold',
  '$black',
  '$extraBlack',
];

export const HeaderStory = () => {
  return (
    <Slide isOpen={true}>
      <VStack space="md">
        {TYPES.map((size) => (
          <HStack key={size} space="md">
            <Heading size={size}>{size} (Default)</Heading>
            {FONT_WEIGHTS.map((fontWeight) => (
              <Heading key={fontWeight} size={size} fontWeight={fontWeight}>
                {size}
              </Heading>
            ))}
          </HStack>
        ))}
      </VStack>
    </Slide>
  );
};
