import { Center, styled } from '@mylong.frontend/core-ui';

export const SideBarSlot = styled(
  Center,
  {
    width: '$5',
    marginHorizontal: '$3',
    height: '$10',
    variants: {
      rotate: {
        true: {
          transform: 'rotate(90deg)',
        },
      },
    },
  },
  { componentName: 'SideBarSlot', descendantStyle: ['_icon'] },
);
