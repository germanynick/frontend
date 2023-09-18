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

    ':active': {
      _text: {
        color: '$primary_medium',
      },
      _icon: {
        color: '$primary_medium',
      },
      _indicator: {
        backgroundColor: '$primary_medium',
      },
      _dot: {
        display: 'flex',
        backgroundColor: '$primary_medium',
      },
    },
  },
  {
    componentName: 'SideBarItem',
    ancestorStyle: ['_item'],
    descendantStyle: ['_text', '_icon', '_indicator', '_dot'],
  },
);
