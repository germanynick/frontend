export const AvatarFallbackText = {
  theme: {
    fontWeight: '$normal',
    variants: {
      size: {
        xs: {
          fontSize: '$3xs',
          lineHeight: '$2xs',
        },
        sm: {
          fontSize: '$2xs',
        },
        md: {
          fontSize: '$xs',
        },
        lg: {
          fontSize: '$sm',
        },
        xl: {
          fontSize: '$md',
        },
        '2xl': {
          fontSize: '$lg',
        },
      },
    },
  },
  componentConfig: {
    ancestorStyle: ['_text'],
  },
};

export const AvatarBadge = {
  theme: {
    borderWidth: 1,
    variants: {
      size: {
        xs: {
          w: 6,
          h: 6,
        },
        sm: {
          w: 8,
          h: 8,
        },
        md: {
          w: 10,
          h: 10,
        },
        lg: {
          w: 12,
          h: 12,
        },
        xl: {
          w: 14,
          h: 14,
        },
        '2xl': {
          w: 16,
          h: 16,
        },
      },
    },
  },
  ancestorStyle: ['_badge'],
};

export const Avatar = {
  theme: {
    variants: {
      size: {
        xs: {
          width: 24,
          height: 24,

          _badge: {
            w: 8,
            h: 8,
          },

          _text: {
            props: { size: 'xs' },
          },
        },

        sm: {
          width: 32,
          height: 32,

          _badge: {
            w: 10,
            h: 10,
          },

          _text: {
            props: { size: 'sm' },
          },
        },

        md: {
          width: 40,
          height: 40,

          _badge: {
            w: 12,
            h: 12,
          },

          _text: {
            props: { size: 'md' },
          },
        },

        lg: {
          width: 48,
          height: 48,

          _badge: {
            w: 14,
            h: 14,
          },

          _text: {
            props: { size: 'lg' },
          },
        },

        xl: {
          width: 56,
          height: 56,

          _badge: {
            w: 16,
            h: 16,
          },

          _text: {
            props: { size: 'xl' },
          },
        },

        '2xl': {
          width: 64,
          height: 64,

          _badge: {
            w: 18,
            h: 18,
          },

          _text: {
            props: { size: '2xl' },
          },
        },
      },
    },
  },
  componentConfig: {
    descendantStyle: ['_text', '_badge'],
  },
};
