import { extendTheme } from 'native-base';

// Please using this link to genereate pattete colors
// https://smart-swatch.netlify.app/#1E2F97
const PRIMARY_COLORS = {
  50: '#e8ecff',
  100: '#bec6f6',
  200: '#94a1eb',
  300: '#6a7be1',
  400: '#4155d8',
  500: '#283cbe',
  600: '#1e2e95',
  700: '#14216b',
  800: '#0a1443',
  900: '#01071b',
};

export const theme = extendTheme({
  colors: {
    primary: PRIMARY_COLORS,
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'full',
        _text: {
          textTransform: 'uppercase',
        },
      },

      variants: {
        outline: {
          borderColor: 'primary.600',
        },
      },
    },
    ModalHeader: {
      baseStyle: {
        borderBottomWidth: 0,
        _text: {
          color: 'primary.600',
        },
      },
    },
    ModalFooter: {
      baseStyle: {
        borderTopWidth: 0,
      },
    },
  },
});
