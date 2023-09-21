import { Divider, styled } from '@mylong.frontend/core-ui';

export const SideBarDivider = styled(
  Divider,
  {
    backgroundColor: '$contentLight',
    props: { orientation: 'vertical' },
  },
  {
    componentName: 'SideBarDivider',
    descendantStyle: ['_divider'],
  },
);
