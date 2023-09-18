import { Divider, styled } from '@mylong.frontend/core-ui';

export const SideBarDivider = styled(
  Divider,
  {
    backgroundColor: '$content_light',
    props: { orientation: 'vertical' },
  },
  {
    componentName: 'SideBarDivider',
    descendantStyle: ['_divider'],
  },
);
