import { styled, Pressable } from '@mylong.frontend/core-ui';

export const SideBarItem = styled(
  Pressable,
  {
    maxWidth: '$full',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    minHeight: '$12',
    //@ts-ignore Overwrite Link styles
    textDecorationLine: 'none',

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
      _dot: {
        display: 'flex',
        backgroundColor: '$primaryMedium',
      },
    },
  },
  {
    componentName: 'SideBarItem',
    ancestorStyle: ['_item'],
    descendantStyle: ['_text', '_icon', '_indicator', '_dot'],
  },
);
