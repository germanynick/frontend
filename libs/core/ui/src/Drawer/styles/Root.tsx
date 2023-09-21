import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export const Root = styled(
  View,
  {
    width: '$full',
    height: '$full',
    position: 'relative',

    variants: {
      isOpen: {
        true: {
          _content: {
            props: { isOpen: true },
          },
        },
      },
    },
  },
  { componentName: 'Drawer', descendantStyle: ['_content', '_backdrop'] },
);
