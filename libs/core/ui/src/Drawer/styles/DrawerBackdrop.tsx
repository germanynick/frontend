import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export const DrawerBackdrop = styled(
  Pressable,
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '$full',
    height: '$full',
    opacity: 0.3,
    backgroundColor: '$black',
  },
  { componentName: 'DrawerBackdrop', ancestorStyle: ['_backdrop'] },
);
