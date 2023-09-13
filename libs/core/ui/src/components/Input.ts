export const Input = {
  theme: {
    defaultProps: {
      size: 'sm',
    },

    variants: {
      variant: {
        outline: {
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
};

export const InputIcon = {
  theme: {
    pr: '$3',
    _icon: {
      color: '$textDark900',
    },
  },
};
