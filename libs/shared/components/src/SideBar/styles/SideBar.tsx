import { VStack, styled } from '@mylong.frontend/core-ui';

export const SideBar = styled(
  VStack,
  {
    props: { space: 'md' },
    width: 220,
    height: '$full',
    backgroundColor: '$white',
    borderRightWidth: '$1',
    borderColor: '$contentLight',
    variants: {
      autoHide: {
        true: {
          '@base': {
            display: 'none',
          },
          '@md': {
            display: 'flex',
          },
        },
      },
    },
  },
  { componentName: 'SideBar', descendantStyle: ['_item'] },
);
