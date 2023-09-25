export const Input = {
  theme: {
    defaultProps: {
      size: 'lg',
    },
    px: '$2',
    _input: {
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
          borderRadius: 999,
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
    componentName: 'Input',
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
          lineHeight: 17,
        },
        md: {
          fontSize: '$md',
          lineHeight: 19,
        },
        lg: {
          fontSize: '$lg',
          lineHeight: 21,
        },
        xl: {
          fontSize: '$xl',
          lineHeight: 24,
        },
      },
    },

    defaultProps: {
      sx: {
        _web: {
          outlineWidth: 0,
          outline: 'none',
        },
      },
    },
  },
};

export const InputSlot = {
  theme: {
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
