import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

const POSITION = 100;
export const DrawerContent = styled(
  Motion.View,
  {
    position: 'absolute',
    backgroundColor: '$white',

    variants: {
      isOpen: {
        true: {
          ':animate': {
            x: 0,
            y: 0,
          },
        },
        false: {},
      },
      anchor: {
        left: {
          left: 0,
          top: 0,
          height: '$full',
          maxWidth: '$full',
          ':initial': {
            x: -POSITION,
          },
          ':exit': {
            x: -POSITION,
          },
        },
        right: {
          right: 0,
          top: 0,
          height: '$full',
          maxWidth: '$full',
          ':initial': {
            x: POSITION,
          },
          ':exit': {
            x: POSITION,
          },
        },
        top: {
          top: 0,
          left: 0,
          maxHeight: '$full',
          width: '$full',
          ':initial': {
            y: -POSITION,
          },
          ':exit': {
            y: -POSITION,
          },
        },
        bottom: {
          bottom: 0,
          left: 0,
          maxHeight: '$full',
          width: '$full',
          ':initial': {
            y: POSITION,
          },
          ':exit': {
            y: POSITION,
          },
        },
      },
    },
    compoundVariants: [
      {
        anchor: 'left',
        isOpen: false,
        value: {
          ':animate': {
            x: -POSITION,
          },
        },
      },
      {
        anchor: 'right',
        isOpen: false,
        value: {
          ':animate': {
            x: POSITION,
          },
        },
      },
      {
        anchor: 'top',
        isOpen: false,
        value: {
          ':animate': {
            y: -POSITION,
          },
        },
      },
      {
        anchor: 'bottom',
        isOpen: false,
        value: {
          ':animate': {
            y: POSITION,
          },
        },
      },
    ],

    defaultProps: {
      anchor: 'left',
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
