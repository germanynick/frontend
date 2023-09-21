import React from 'react';
import { Button, ButtonText, CalendarDaysIcon, ChevronRightIcon, View } from '@mylong.frontend/core-ui';
import {
  SideBar,
  SideBarDivider,
  SideBarDot,
  SideBarIcon,
  SideBarIndicator,
  SideBarItem,
  SideBarMenu,
  SideBarSlot,
  SideBarText,
  Layout,
  LayoutHeader,
} from '@mylong.frontend/shared-components';
import { useRouter } from '@mylong.frontend/core-router';

export function Index() {
  const { push } = useRouter();
  return (
    <Layout>
      <LayoutHeader />
      <View>
        <Button onPress={() => push('/buttons')}>
          <ButtonText>Button</ButtonText>
        </Button>

        <Button onPress={() => push('/drawer')}>
          <ButtonText>Drawer</ButtonText>
        </Button>
        <Button onPress={() => push('/heading')}>
          <ButtonText>HEADING</ButtonText>
        </Button>
      </View>

      <SideBar>
        <SideBarMenu>
          <SideBarItem states={{ active: true }}>
            <SideBarSlot>
              <SideBarIcon as={CalendarDaysIcon} />
            </SideBarSlot>

            <SideBarText>Long Text Long Text Long Text</SideBarText>
            <SideBarSlot>
              <SideBarIcon as={ChevronRightIcon} />
            </SideBarSlot>
          </SideBarItem>
          <SideBarItem>
            <SideBarSlot>
              <SideBarDivider />
              <SideBarDot />
            </SideBarSlot>

            <SideBarText>Long Text Long Text Long Text</SideBarText>
            <SideBarIndicator />
          </SideBarItem>

          <SideBarItem states={{ active: true }}>
            <SideBarSlot>
              <SideBarDivider />
              <SideBarDot />
            </SideBarSlot>
            <SideBarText>Long Text Long Text Long Text</SideBarText>
            <SideBarIndicator />
          </SideBarItem>
          <SideBarItem states={{ active: true }}>
            <SideBarSlot>
              <SideBarIcon as={CalendarDaysIcon} />
            </SideBarSlot>
            <SideBarText>Home</SideBarText>
            <SideBarIndicator />
          </SideBarItem>
          <SideBarItem>
            <SideBarSlot>
              <SideBarIcon as={CalendarDaysIcon} />
            </SideBarSlot>
            <SideBarText>Home</SideBarText>
            <SideBarSlot>
              <SideBarIcon as={ChevronRightIcon} />
            </SideBarSlot>
          </SideBarItem>
          <SideBarItem>
            <SideBarSlot>
              <SideBarDivider />
              <SideBarDot />
            </SideBarSlot>

            <SideBarText>Long Text Long Text Long Text</SideBarText>
            <SideBarIndicator />
          </SideBarItem>

          <SideBarItem states={{ active: true }}>
            <SideBarSlot>
              <SideBarDivider />
              <SideBarDot />
            </SideBarSlot>
            <SideBarText>Long Text Long Text Long Text</SideBarText>
            <SideBarIndicator />
          </SideBarItem>
        </SideBarMenu>
      </SideBar>
    </Layout>
  );
}

export default Index;
