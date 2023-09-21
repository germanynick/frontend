// eslint-disable-next-line no-restricted-imports
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { Motion } from '@legendapp/motion';

export const Content = styled(
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
      },
      anchor: {
        left: {
          left: 0,
          top: 0,
          height: '$full',
          maxWidth: '$full',
          ':initial': {
            x: -1000,
          },
          ':exit': {
            x: -1000,
          },
        },
        right: {
          right: 0,
          top: 0,
          height: '$full',
          maxWidth: '$full',
          ':initial': {
            x: 1000,
          },
          ':exit': {
            x: 1000,
          },
        },
        top: {
          top: 0,
          left: 0,
          maxHeight: '$full',
          width: '$full',
          ':initial': {
            y: -1000,
          },
          ':exit': {
            y: -1000,
          },
        },
        bottom: {
          bottom: 0,
          left: 0,
          maxHeight: '$full',
          width: '$full',
          ':initial': {
            y: 1000,
          },
          ':exit': {
            y: 1000,
          },
        },
      },
    },
    defaultProps: {
      anchor: 'left',
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
