import { VStack, styled } from '@mylong.frontend/core-ui';

export const SideBarMenu = styled(
  VStack,
  {
    width: '$full',
  },
  { componentName: 'SideBarMenu', descendantStyle: ['_item'] },
);
