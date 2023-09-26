import { styled } from '@mylong.frontend/core-ui';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

export const BottomNavIndicator = styled(
  Motion.View,
  {
    width: '$2',
    height: '$2',
    borderRadius: '$full',
    backgroundColor: '$transparent',
  },
  { componentName: 'BottomNavIndicator', ancestorStyle: ['_indicator'] },
  { plugins: [new AnimationResolver()] },
);
