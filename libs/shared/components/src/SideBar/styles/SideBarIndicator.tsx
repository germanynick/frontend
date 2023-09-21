import { styled, View } from '@mylong.frontend/core-ui';

export const SideBarIndicator = styled(
  View,
  {
    marginLeft: '$2',
    maxWidth: '$1',
    width: '$1',
    height: '$8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  { componentName: 'SideBarIndicator', ancestorStyle: ['_indicator'] },
);
