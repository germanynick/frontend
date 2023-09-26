import { styled, Text } from '@mylong.frontend/core-ui';

export const BottomNavText = styled(
  Text,
  {
    textDecorationLine: 'none',
    defaultProps: {
      size: 'body3',
      color: '$contentMedium',
    },
  },
  { componentName: 'BottomNavText', ancestorStyle: ['_text'] },
);
