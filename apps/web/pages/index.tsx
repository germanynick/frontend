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
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
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
    </>
  );
}

export default Index;
