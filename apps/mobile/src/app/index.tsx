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
} from '@mylong.frontend/shared-components';

export function Index() {
  return (
    <SideBar className="bg-red-500">
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

export default Index;
