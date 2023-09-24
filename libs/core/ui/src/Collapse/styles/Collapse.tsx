import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

const TOP = {
  y: -10,
  opacity: 0,
};

const CENTER = {
  y: 0,
  opacity: 1,
};

export const Collapse = styled(
  Motion.View,
  {
    variants: {
      disabledAnimation: {
        true: {
          ':initial': CENTER,
          ':exit': CENTER,
        },
      },
      isOpen: {
        true: {
          //@ts-ignore
          ':animate': CENTER,
        },
        false: {
          display: 'none',
          //@ts-ignore
          ':animate': TOP,
        },
      },
    },
    defaultProps: {
      //@ts-ignore
      isOpen: false,
      //@ts-ignore
      disabledAnimation: false,
    },
  },
  { componentName: 'Collapse' },
  { plugins: [new AnimationResolver({})] },
);
