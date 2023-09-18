import { VStack, styled } from '@mylong.frontend/core-ui';

export const SideBar = styled(
  VStack,
  {
    props: { space: 'md' },
    width: 220,
    height: '$full',
    backgroundColor: '$white',
    borderRightWidth: '$1',
    borderColor: '$content_light',
  },
  { componentName: 'SideBar', descendantStyle: ['_item'] },
);
