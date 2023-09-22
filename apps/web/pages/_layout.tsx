import React from 'react';
import { ThemeProvider, Text } from '@mylong.frontend/core-ui';

import {
  BottomNav,
  BottomNavText,
  BottomNavItem,
  BottomNavIcon,
  BottomNavIndicator,
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from '@mylong.frontend/shared-components';
import { Home } from '@mylong.frontend/core-icons';
import { useRouter } from '@mylong.frontend/core-router';

export const AppLayout = ({ children }: any) => {
  const { push } = useRouter();

  return (
    <ThemeProvider>
      <Layout>
        <LayoutHeader>
          <Text>Header</Text>
        </LayoutHeader>
        <LayoutContent>{children}</LayoutContent>
        <LayoutFooter>
          <BottomNav>
            <BottomNavItem states={{ active: true }} onPress={() => push('/')}>
              <BottomNavIcon as={Home} />
              <BottomNavText>Home</BottomNavText>
              <BottomNavIndicator />
            </BottomNavItem>
            <BottomNavItem onPress={() => push('/button')}>
              <BottomNavIcon as={Home} />
              <BottomNavText>Button</BottomNavText>
              <BottomNavIndicator />
            </BottomNavItem>
            <BottomNavItem onPress={() => push('/drawer')}>
              <BottomNavIcon as={Home} />
              <BottomNavText>Drawer</BottomNavText>
              <BottomNavIndicator />
            </BottomNavItem>
            <BottomNavItem states={{ active: true }} onPress={() => push('/heading')}>
              <BottomNavIcon as={Home} />
              <BottomNavText>Heading</BottomNavText>
              <BottomNavIndicator />
            </BottomNavItem>
            <BottomNavItem onPress={() => push('/text')}>
              <BottomNavIcon as={Home} />
              <BottomNavText>Text</BottomNavText>
              <BottomNavIndicator />
            </BottomNavItem>
            <BottomNavItem onPress={() => push('/input')}>
              <BottomNavIcon as={Home} />
              <BottomNavText>Input</BottomNavText>
              <BottomNavIndicator />
            </BottomNavItem>
          </BottomNav>
        </LayoutFooter>
      </Layout>
    </ThemeProvider>
  );
};
