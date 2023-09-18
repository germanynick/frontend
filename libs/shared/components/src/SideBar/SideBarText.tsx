import { styled, Text } from '@mylong.frontend/core-ui';

export const SideBarText = styled(
  Text,
  {
    fontSize: '$md',
    fontStyle: 'normal',
    color: '$content_dark',
    flexGrow: 1,
    flexShrink: 1,
    defaultProps: {
      isTruncated: true,
    },
  },
  { componentName: 'SideBarText', ancestorStyle: ['_text'] },
);
