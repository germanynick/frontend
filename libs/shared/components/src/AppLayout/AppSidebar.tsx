import { ChevronRightIcon, Drawer, DrawerBackdrop, DrawerContent } from '@mylong.frontend/core-ui';
import { Home } from '@mylong.frontend/core-icons';
import { Link, usePathname, Href } from '@mylong.frontend/core-router';
import { ComponentType, FC, useMemo, useState } from 'react';
import { usePressed } from '@gluestack-ui/react-native-aria';
import { useLayoutState } from './useLayoutState';
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
} from '../SideBar';

interface IItem {
  icon?: ComponentType;
  label: string;
  path?: Href;
  items?: IItem[];
}
const MENU: IItem[] = [
  {
    icon: Home,
    label: 'Home',
    path: '/',
  },
  {
    icon: Home,
    label: 'Typography',
    items: [
      { label: 'Heading', path: '/heading' },
      { label: 'Text', path: '/text' },
    ],
  },
  {
    icon: Home,
    label: 'Atomic',
    items: [
      { label: 'Button', path: '/button' },
      { label: 'Input', path: '/input' },
      { label: 'Drawer', path: '/drawer' },
    ],
  },
  {
    icon: Home,
    label: 'Moleculer',
    items: [{ label: 'Job Card', path: '/job-card' }],
  },
];

export const MenuItem: FC<IItem> = ({ icon, label, items, path }) => {
  const pathname = usePathname();
  const active = useMemo(() => items?.some(({ path }) => path === pathname), [items, pathname]);
  const [expanded, setExpanded] = useState(active);

  const { pressEvents } = usePressed(
    () => setExpanded(!expanded),
    () => {},
  );

  return (
    <>
      <SideBarItem states={{ active: active || path === pathname }} {...pressEvents}>
        <SideBarSlot>
          <SideBarIcon as={icon} />
        </SideBarSlot>

        <SideBarText as={path ? Link : undefined} href={path}>
          {label}
        </SideBarText>
        {items?.length ? (
          <SideBarSlot rotate={expanded}>
            <SideBarIcon as={ChevronRightIcon} />
          </SideBarSlot>
        ) : (
          <SideBarIndicator />
        )}
      </SideBarItem>
      {expanded &&
        items?.map(({ label, path }, index) => (
          <SideBarItem key={index} states={{ active: path === pathname }}>
            <SideBarSlot>
              <SideBarDivider />
              <SideBarDot />
            </SideBarSlot>

            <SideBarText as={Link} href={path}>
              {label}
            </SideBarText>
            <SideBarIndicator />
          </SideBarItem>
        ))}
    </>
  );
};

export const AppSidebarDrawer = () => {
  const isSidebarOpen = useLayoutState((state) => state.isSidebarOpen);
  const toggleSidebar = useLayoutState((state) => state.toggleSidebar);

  return (
    <Drawer sx={{ '@base': { display: 'flex' }, '@md': { display: 'none' } }} isOpen={isSidebarOpen}>
      <DrawerBackdrop onPress={toggleSidebar} />
      <DrawerContent>
        <SideBar>
          <SideBarMenu>
            {MENU.map((props, index) => (
              <MenuItem key={index} {...props} />
            ))}
          </SideBarMenu>
        </SideBar>
      </DrawerContent>
    </Drawer>
  );
};

export const AppSidebarFixed = () => {
  return (
    <SideBar autoHide={true}>
      <SideBarMenu>
        {MENU.map((props, index) => (
          <MenuItem key={index} {...props} />
        ))}
      </SideBarMenu>
    </SideBar>
  );
};

export const AppSideBar = () => {
  return (
    <>
      <AppSidebarDrawer />
      <AppSidebarFixed />
    </>
  );
};
