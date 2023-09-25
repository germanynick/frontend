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
    descendantStyle: ['_input'],
  },
};

export const InputField = {
  theme: {
    fontFamily: '$body',
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
