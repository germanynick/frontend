import { View, styled } from '@mylong.frontend/core-ui';

export const SideBarDot = styled(
  View,
  {
    position: 'absolute',
    width: '$3',
    height: '$3',
    borderRadius: '$full',
    borderWidth: '$2',
    borderColor: '$white',
    display: 'none',
  },
  { componentName: 'SideBarDot', ancestorStyle: ['_dot'] },
);
