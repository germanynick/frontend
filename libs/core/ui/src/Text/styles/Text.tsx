import { Text as BaseText } from 'react-native';
import { styled } from '@gluestack-style/react';

export const Text = styled(
  BaseText,
  {
    color: '$textLight900',
    _dark: {
      color: '$textDark200',
    },
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
          lineHeight: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
      size: {
        title1: {
          fontSize: '$md',
          lineHeight: '$sm',
          fontWeight: '$bold',
        },
        title2: {
          fontSize: '$sm',
          lineHeight: '$xs',
          fontWeight: '$bold',
        },
        title3: {
          fontSize: '$xs',
          lineHeight: '$xs',
          fontWeight: '$bold',
        },

        subTitle1: {
          fontSize: '$md',
          lineHeight: '$sm',
          fontWeight: '$medium',
        },
        subTitle2: {
          fontSize: '$sm',
          lineHeight: '$xs',
          fontWeight: '$medium',
        },
        subTitle3: {
          fontSize: '$xs',
          lineHeight: '$xs',
          fontWeight: '$medium',
        },

        body1: {
          fontSize: '$md',
          lineHeight: '$sm',
          fontWeight: '$normal',
        },
        body2: {
          fontSize: '$sm',
          lineHeight: '$xs',
          fontWeight: '$normal',
        },
        body3: {
          fontSize: '$xs',
          lineHeight: '$xs',
          fontWeight: '$normal',
        },
      },
    },

    defaultProps: {
      size: 'title1',
    },
  },
  {
    componentName: 'Text',
  },
);
