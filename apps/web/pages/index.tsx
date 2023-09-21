import { CalendarDaysIcon, ChevronRightIcon } from '@mylong.frontend/core-ui';
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
  BottomNav,
  LayoutContent,
  BottomNavText,
  BottomNavItem,
  BottomNavIcon,
  BottomNavIndicator,
} from '@mylong.frontend/shared-components';
import { Home } from '@mylong.frontend/core-icons';
import { useRouter } from '@mylong.frontend/core-router';

const BottomMenu = () => {
  const { push } = useRouter();

  return (
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
    </BottomNav>
  );
};
export function Index() {
  return (
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
  );
}

Index.getLayout = (children: any) => {
  return (
    <Layout>
      <LayoutContent>
        {children}
        <BottomMenu />
      </LayoutContent>
    </Layout>
  );
};

export default Index;
