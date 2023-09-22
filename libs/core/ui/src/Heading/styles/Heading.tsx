import { styled } from '@gluestack-style/react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';

export const Heading = styled(
  H3,
  {
    color: '$textLight900',
    letterSpacing: '$md',
    fontWeight: '$bold',
    fontFamily: '$heading',

    // Overrides expo-html default styling
    marginVertical: 0,

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
        h1: {
          props: { as: H1 },
          fontSize: '$5xl',
          lineHeight: '$6xl',
          letterSpacing: '$lg',
        },
        h2: {
          props: { as: H2 },
          fontSize: '$4xl',
          lineHeight: '$5xl',
          letterSpacing: '$lg',
        },
        h3: {
          props: { as: H3 },
          fontSize: '$3xl',
          lineHeight: '$3xl',
          letterSpacing: '$lg',
        },
        h4: {
          props: { as: H4 },
          fontSize: '$2xl',
          lineHeight: '$2xl',
          letterSpacing: '$lg',
        },
        h5: {
          props: { as: H5 },
          fontSize: '$xl',
          lineHeight: '$xl',
        },
        h6: {
          props: { as: H6 },
          fontSize: '$lg',
          lineHeight: '$lg',
        },
      },
    },

    defaultProps: {
      size: 'h3',
    },
  },
  {
    componentName: 'Heading',
  },
);
