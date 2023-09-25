export const Input = {
  theme: {
    defaultProps: {
      size: 'lg',
    },
    px: '$2',
    _input: {
      outline: 'none',
      px: '$1',
    },
    variants: {
      variant: {
        underlined: {
          px: '$0',
          _input: {
            px: '$0',
          },
          borderWidth: 0,
          borderBottomWidth: '$1',
          borderRadius: 0,
          ':focus': {
            borderColor: '$primary500',
            ':hover': {
              borderColor: '$primary500',
            },
          },
          ':invalid': {
            borderColor: '$error700',

            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              borderColor: '$error700',
              ':hover': {
                borderColor: '$error700',
              },
            },
          },
        },
        rounded: {
          _input: {
            px: '$1',
          },
          ':focus': {
            borderColor: '$primary500',
            ':hover': {
              borderColor: '$primary500',
            },
          },
          ':invalid': {
            borderColor: '$error700',

            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              borderColor: '$error700',
              ':hover': {
                borderColor: '$error700',
              },
            },
          },
        },
        outline: {
          borderRadius: '$lg',
          ':focus': {
            borderColor: '$primary500',

            ':hover': {
              borderColor: '$primary500',
            },
          },
          ':invalid': {
            borderColor: '$error700',

            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              borderColor: '$error700',
              ':hover': {
                borderColor: '$error700',
              },
            },
          },
        },
      },
    },
  },
  componentConfig: {
    descendantStyle: ['_input', '_slot'],
  },
};

export const InputField = {
  theme: {
    fontFamily: '$body',
    variants: {
      size: {
        sm: {
          fontSize: '$sm',
          lineHeight: '$2xs',
        },
        md: {
          fontSize: '$md',
          lineHeight: '$xs',
        },
        lg: {
          fontSize: '$lg',
          lineHeight: '$sm',
        },
        xl: {
          fontSize: '$xl',
          lineHeight: '$md',
        },
      },
    },
  },
};

export const InputSlot = {
  theme: {
    outline: 'none',

    _icon: {
      color: '$textDark900',
    },

    props: {
      tabIndex: -1,
    },
  },
  componentConfig: {
    componentName: 'InputSlot',
    ancestorStyle: ['_slot'],
    descendantStyle: ['_icon'],
  },
};
