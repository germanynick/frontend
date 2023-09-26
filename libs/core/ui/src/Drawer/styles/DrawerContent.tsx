import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

const TOP = {
  opacity: 0,
  x: 0,
  y: -200,
};

const BOTTOM = {
  opacity: 0,
  x: 0,
  y: 200,
};

const LEFT = {
  opacity: 0,
  x: -200,
  y: 0,
};

const RIGHT = {
  opacity: 0,
  x: 200,
  y: 0,
};

const CENTER = {
  opacity: 1,
  x: 0,
  y: 0,
};

export const DrawerContent = styled(
  Motion.View,
  {
    position: 'absolute',
    backgroundColor: '$white',
    ':transition': {
      duration: 300,
    },

    variants: {
      isOpen: {
        true: {
          //@ts-ignore
          ':animate': CENTER,
        },
        false: {},
      },
      anchor: {
        left: {
          left: 0,
          top: 0,
          height: '$full',
          maxWidth: '$full',
          //@ts-ignore
          ':initial': LEFT,
          ':exit': LEFT,
        },
        right: {
          right: 0,
          top: 0,
          height: '$full',
          maxWidth: '$full',
          //@ts-ignore
          ':initial': RIGHT,
          ':exit': RIGHT,
        },
        top: {
          top: 0,
          left: 0,
          maxHeight: '$full',
          width: '$full',
          //@ts-ignore
          ':initial': TOP,
          ':exit': TOP,
        },
        bottom: {
          bottom: 0,
          left: 0,
          maxHeight: '$full',
          width: '$full',
          //@ts-ignore
          ':initial': BOTTOM,
          ':exit': BOTTOM,
        },
      },
    },
    compoundVariants: [
      {
        anchor: 'left',
        isOpen: false,
        value: {
          //@ts-ignore
          ':animate': LEFT,
        },
      },
      {
        anchor: 'right',
        isOpen: false,
        value: {
          //@ts-ignore
          ':animate': RIGHT,
        },
      },
      {
        anchor: 'top',
        isOpen: false,
        value: {
          //@ts-ignore
          ':animate': TOP,
        },
      },
      {
        anchor: 'bottom',
        isOpen: false,
        value: {
          //@ts-ignore
          ':animate': BOTTOM,
        },
      },
    ],

    defaultProps: {
      anchor: 'left',
      //@ts-ignore
      isOpen: false,
    },
  },
  {
    componentName: 'DrawerContent',
    ancestorStyle: ['_content'],
  },
  {
    plugins: [new AnimationResolver({})],
  },
);
