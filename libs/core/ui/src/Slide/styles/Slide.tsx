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
        false: {},
      },
      anchor: {
        left: {
          //@ts-ignore
          ':initial': LEFT,
          ':exit': LEFT,
        },
        right: {
          //@ts-ignore
          ':initial': RIGHT,
          ':exit': RIGHT,
        },
        top: {
          //@ts-ignore
          ':initial': TOP,
          ':exit': TOP,
        },
        bottom: {
          //@ts-ignore
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
          //@ts-ignore
          ':animate': LEFT,
        },
      },
      {
        isOpen: false,
        anchor: 'right',
        value: {
          //@ts-ignore
          ':animate': RIGHT,
        },
      },
      {
        isOpen: false,
        anchor: 'top',
        value: {
          //@ts-ignore
          ':animate': TOP,
        },
      },
      {
        isOpen: false,
        anchor: 'bottom',
        value: {
          //@ts-ignore
          ':animate': BOTTOM,
        },
      },
    ],
    defaultProps: {
      anchor: 'right',

      //@ts-ignore
      isOpen: false,

      //@ts-ignore
      disabledAnimation: typeof window === 'undefined',
    },
  },
  { componentName: 'Slide' },
  { plugins: [new AnimationResolver({})] },
);
