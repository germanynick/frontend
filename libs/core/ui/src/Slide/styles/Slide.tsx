// eslint-disable-next-line no-restricted-imports
import { styled } from '@gluestack-ui/themed';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

const TOP = {
  opacity: 0,
  x: 0,
  y: -30,
};

const BOTTOM = {
  opacity: 0,
  x: 0,
  y: 30,
};

const LEFT = {
  opacity: 0,
  x: -30,
  y: 0,
};

const RIGHT = {
  opacity: 0,
  x: 30,
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
          //@ts-ignore
          ':initial': CENTER,
          ':exit': CENTER,
        },
      },
      isOpen: {
        true: {
          //@ts-ignore
          ':animate': CENTER,
        },
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
    },
  },
  { componentName: 'Slide' },
  { plugins: [new AnimationResolver({})] },
);
