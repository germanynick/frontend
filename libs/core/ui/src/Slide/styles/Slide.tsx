import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

const TOP = {
  opacity: 0,
  x: 0,
  y: -100,
};

const BOTTOM = {
  opacity: 0,
  x: 0,
  y: 100,
};

const LEFT = {
  opacity: 0,
  x: -100,
  y: 0,
};

const RIGHT = {
  opacity: 0,
  x: 100,
  y: 0,
};

const CENTER = {
  opacity: 1,
  x: 0,
  y: 0,
};

export const Slide = styled(
  Motion.View,
  {
    ':initial': RIGHT,
    ':exit': RIGHT,

    variants: {
      isOpen: {
        true: {
          ':animate': CENTER,
        },
        false: {
          ':animate': RIGHT,
        },
      },
      anchor: {
        left: {
          ':initial': LEFT,
          ':exit': LEFT,
        },
        right: {
          ':initial': RIGHT,
          ':exit': RIGHT,
        },
        top: {
          ':initial': TOP,
          ':exit': TOP,
        },
        bottom: {
          ':initial': BOTTOM,
          ':exit': BOTTOM,
        },
      },
    },
    compoundVariants: [
      {
        isOpen: false,
        anchor: 'left',
        value: {
          ':animate': LEFT,
        },
      },
      {
        isOpen: false,
        anchor: 'right',
        value: {
          ':animate': RIGHT,
        },
      },
      {
        isOpen: false,
        anchor: 'top',
        value: {
          ':animate': TOP,
        },
      },
      {
        isOpen: false,
        anchor: 'bottom',
        value: {
          ':animate': BOTTOM,
        },
      },
    ],
  },
  { componentName: 'Slide' },
  { plugins: [new AnimationResolver({})] },
);
