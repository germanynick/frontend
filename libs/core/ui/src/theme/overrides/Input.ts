export const Input = {
  theme: {
    defaultProps: {
      size: 'lg',
    },

    variants: {
      variant: {
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
            _web: {
              boxShadow: 'none',
            },
            ':hover': {
              borderColor: '$error700',
            },
            ':focus': {
              borderColor: '$error700',
              ':hover': {
                borderColor: '$error700',
                _web: {
                  boxShadow: 'none',
                },
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
    paddingHorizontal: '$2',
    _icon: {
      color: '$textDark900',
    },
  },
  componentConfig: {
    componentName: 'InputSlot',
    ancestorStyle: ['_slot'],
    descendantStyle: ['_icon'],
  },
};
