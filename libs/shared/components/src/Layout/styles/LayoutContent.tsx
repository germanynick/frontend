import { ScrollView, styled } from '@mylong.frontend/core-ui';

export const LayoutContent = styled(
  ScrollView,
  {
    height: '$full',
    alignSelf: 'center',
    width: '$full',
    maxWidth: '$full',
  },
  { componentName: 'LayoutContent' },
);
