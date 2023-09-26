import { styled, Pressable } from '@mylong.frontend/core-ui';

export const BottomNavItem = styled(
  Pressable,
  {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: '$3',
    justifyContent: 'center',
    alignItems: 'center',
    //@ts-ignore Overwrite Link styles
    textDecorationLine: 'none',
    color: '$contentMedium',
    gap: '$1',
    ':active': {
      _text: {
        color: '$primaryMedium',
      },
      _icon: {
        color: '$primaryMedium',
      },
      _indicator: {
        backgroundColor: '$primaryMedium',
      },
    },
  },
  { componentName: 'BottomNavItem', descendantStyle: ['_text', '_icon', '_indicator'] },
);
