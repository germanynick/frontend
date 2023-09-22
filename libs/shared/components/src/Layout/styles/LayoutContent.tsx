import { ScrollView, styled } from '@mylong.frontend/core-ui';

export const LayoutContent = styled(
  ScrollView,
  {
    height: '$full',
    paddingHorizontal: '$4',
    alignSelf: 'center',
    width: '$full',

    '@md': {
      maxWidth: '$2/3',
    },
  },
  { componentName: 'LayoutContent' },
);
