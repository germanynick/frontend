import { styled, View } from '@mylong.frontend/core-ui';

export const BottomNavIndicator = styled(
  View,
  {
    width: '$2',
    height: '$2',
    borderRadius: '$full',
    backgroundColor: 'none',
  },
  { componentName: 'BottomNavIndicator', ancestorStyle: ['_indicator'] },
);
