import { styled, Text } from '@mylong.frontend/core-ui';

export const SideBarText = styled(
  Text,
  {
    color: '$contentDark',
    flexGrow: 1,
    flexShrink: 1,
    textDecorationLine: 'none',
    defaultProps: {
      isTruncated: true,
      size: 'body1',
    },
  },
  { componentName: 'SideBarText', ancestorStyle: ['_text'] },
);
