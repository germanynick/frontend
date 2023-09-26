// eslint-disable-next-line no-restricted-imports
import { Icon } from '@gluestack-ui/themed';
import { styled } from '@gluestack-style/react';
import { View, Text, Pressable } from 'react-native';

export const GStepper = styled(
  View,
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    variants: {
      anchor: {
        vertical: {
          flexDirection: 'column',

          _item: {
            flexDirection: 'row',
            paddingVertical: '$4',
            width: '$full',
            justifyContent: 'flex-start',
          },
          _connector: {
            top: 68,
            left: 24,
            width: 1,
            height: 24,
          },
          _title: {
            position: 'absolute',
            top: 20,
            left: 0,
            paddingLeft: 64,
            width: '$full',
          },
          _description: {
            position: 'absolute',
            top: 42,
            left: 0,
            paddingLeft: 64,
            width: '$full',
          },
        },
        horizontal: {},
      },
    },

    defaultProps: {
      anchor: 'horizontal',
    },
  },
  {
    descendantStyle: ['_item', '_text', '_icon', '_circle', '_slot', '_connector', '_title', '_description'],
  },
);

export const GStepperItem = styled(
  Pressable,
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    _web: {
      outline: 'none',
      outlineWidth: 0,
    },
    ':hover': {
      _circle: {
        borderColor: '$primaryLight',
        backgroundColor: '$primaryVeryLight',
      },
      _text: {
        color: '$primaryMedium',
      },
      _icon: {
        color: '$primaryMedium',
      },
    },
    ':disabled': {
      _circle: {
        borderColor: '$contentLight',
        backgroundColor: '$contentLight',
      },
      _text: {
        color: '$white',
      },
      _icon: {
        color: '$white',
      },
    },
    ':active': {
      _circle: {
        backgroundColor: '$primaryMedium',
        borderWidth: 0,
      },
      _text: {
        color: '$white',
      },
      _icon: {
        color: '$white',
      },
      _connector: {
        backgroundColor: '$primaryMedium',
      },
    },
    ':focus': {
      _circle: {
        borderColor: '$primaryLight',
        backgroundColor: '$contentLight',
      },
      _text: {
        color: '$white',
      },
      _icon: {
        color: '$white',
      },
      _slot: {
        backgroundColor: '$primaryMedium',
      },
      _connector: {
        backgroundColor: '$primaryMedium',
      },
    },
  },
  {
    ancestorStyle: ['_item'],
    descendantStyle: ['_text', '_icon', '_circle', '_slot', '_connector'],
  },
);

export const GStepperCircle = styled(
  View,
  {
    width: 48,
    height: 48,
    borderRadius: '$full',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '$1',
    borderColor: '$contentMedium',
    backgroundColor: '$white',
  },
  {
    ancestorStyle: ['_circle'],
    descendantStyle: ['_text', '_icon', '_slot'],
  },
);

export const GStepperSlot = styled(
  View,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderRadius: '$full',
  },
  {
    ancestorStyle: ['_slot'],
    descendantStyle: ['_text', '_icon'],
  },
);

export const GStepperText = styled(
  Text,
  {
    fontSize: '$md',
    fontWeight: '$semibold',
    lineHeight: '$md',
    color: '$contentVeryDark',
  },
  {
    ancestorStyle: ['_text'],
  },
);

export const GStepperTitle = styled(
  Text,
  {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$contentVeryDark',
    lineHeight: '$md',
    alignSelf: 'center',
    props: {
      numberOfLines: 1,
      ellipsizeMode: 'tail',
    },
  },
  { ancestorStyle: ['_title'] },
);

export const GStepperDescription = styled(
  Text,
  {
    fontSize: '$sm',
    fontWeight: '$normal',
    color: '$contentVeryDark',
    lineHeight: '$md',
    alignSelf: 'center',
    props: {
      numberOfLines: 1,
      ellipsizeMode: 'tail',
    },
  },
  { ancestorStyle: ['_description'] },
);

export const GStepperIcon = styled(
  Icon,
  {
    color: '$contentVeryDark',
  },
  {
    ancestorStyle: ['_icon'],
  },
);

export const GStepperConnector = styled(
  View,
  {
    position: 'absolute',
    height: 1,
    backgroundColor: '$contentLight',
    width: '60%',
    top: 24,
    left: '70%',
  },
  { ancestorStyle: ['_connector'] },
);
