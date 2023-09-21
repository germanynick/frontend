import { styled, HStack } from '@mylong.frontend/core-ui';

export const BottomNav = styled(
  HStack,
  {
    height: 72,
    paddingTop: '$3',
    paddingBottom: '$1',
    width: '$full',
    borderTopWidth: '$1',
    borderTopColor: '$contentLight',
    justifyContent: 'space-between',
  },
  { componentName: 'BottomNav' },
);
