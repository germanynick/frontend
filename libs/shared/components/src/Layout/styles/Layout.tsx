import { View, styled } from '@mylong.frontend/core-ui';

export const Layout = styled(
  View,
  {
    height: '$full',
    backgroundColor: '$backgroundPrimary',
    _web: {
      height: '100vh',
    },
  },
  { componentName: 'Layout' },
);
