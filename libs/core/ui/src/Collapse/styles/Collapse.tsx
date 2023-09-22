import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

export const Collapse = styled(
  Motion.View,
  {
    ':initial': {
      y: -10,
      opacity: 0,
    },
    ':exit': {
      y: -10,
      opacity: 0,
    },

    variants: {
      isOpen: {
        true: {
          ':animate': {
            y: 0,
            opacity: 1,
          },
        },
        false: {
          display: 'none',
          ':animate': {
            y: -10,
            opacity: 0,
          },
        },
      },
    },
  },
  { componentName: 'CollapseContent' },
  { plugins: [new AnimationResolver({})] },
);
