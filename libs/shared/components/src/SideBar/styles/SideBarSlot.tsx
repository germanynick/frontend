import { Center, styled } from '@mylong.frontend/core-ui';

export const SideBarSlot = styled(
  Center,
  {
    width: '$5',
    marginHorizontal: '$3',
    height: '$10',
  },
  { componentName: 'SideBarSlot', descendantStyle: ['_icon'] },
);
