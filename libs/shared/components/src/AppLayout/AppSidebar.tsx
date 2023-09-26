import { ChevronRightIcon, Collapse, Drawer, DrawerBackdrop, DrawerContent } from '@mylong.frontend/core-ui';
import { Home } from '@mylong.frontend/core-icons';
import { Link, usePathname, Href, useRouter } from '@mylong.frontend/core-router';
import { ComponentType, FC, useMemo, useState } from 'react';
import { usePressed } from '@gluestack-ui/react-native-aria';
import { useLayoutState } from '@mylong.frontend/shared-store';
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
    label: 'Stepper',
    items: [
      { label: 'Gluestack', path: '/stepper/gluestack' },
      { label: 'Shadcn', path: '/stepper/shadcn' },
      { label: 'Taillwind', path: '/stepper/tailwind' },
      { label: 'Daisy', path: '/stepper/daisy' },
    ],
  },

  {
    icon: Home,
    label: 'Atoms',
    items: [
      { label: 'Heading', path: '/heading' },
      { label: 'Text', path: '/text' },
      { label: 'Button', path: '/button' },
      { label: 'Input', path: '/input' },
      { label: 'Select', path: '/select' },
      { label: 'Drawer', path: '/drawer' },
      { label: 'Avatar', path: '/avatar' },
      { label: 'Icon', path: '/icon' },
    ],
  },
  {
    icon: Home,
    label: 'Molecules',
    items: [
      { label: 'Form Field', path: '/form' },
      { label: 'Job Card', path: '/job-card' },
    ],
  },
  { icon: Home, label: 'Features', items: [{ label: 'Sign In', path: '/signin' }] },
];

export const MenuItem: FC<IItem> = ({ icon, label, items, path }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const active = useMemo(() => items?.some(({ path }) => path === pathname), [items, pathname]);
  const [expanded, setExpanded] = useState(active);
  const toggleSidebar = useLayoutState((state) => state.toggleSidebar);

  const { pressEvents } = usePressed(
    () => {
      if (path) {
        push(path);
        toggleSidebar(false);
      } else {
        setExpanded(!expanded);
      }
    },
    () => {},
  );

  return (
    <>
      <SideBarItem states={{ active: active || path === pathname }} {...pressEvents}>
        <SideBarSlot>
          <SideBarIcon as={icon} />
        </SideBarSlot>

        <SideBarText
          as={path ? Link : undefined}
          //@ts-ignore
          href={path}
          {...pressEvents}
        >
          {label}
        </SideBarText>
        {items?.length ? (
          <SideBarSlot rotate={expanded ? 0 : 90}>
            <SideBarIcon as={ChevronRightIcon} />
          </SideBarSlot>
        ) : (
          <SideBarIndicator />
        )}
      </SideBarItem>
      {items?.length && (
        <Collapse isOpen={expanded}>
          {items?.map(({ label, path }, index) => (
            <SideBarItem key={index} states={{ active: path === pathname }}>
              <SideBarSlot>
                <SideBarDivider />
                <SideBarDot />
              </SideBarSlot>

              <SideBarText
                as={Link}
                //@ts-ignore
                href={path}
                onPress={() => toggleSidebar(false)}
              >
                {label}
              </SideBarText>
              <SideBarIndicator />
            </SideBarItem>
          ))}
        </Collapse>
      )}
    </>
  );
};

export const AppSidebarDrawer = () => {
  const isSidebarOpen = useLayoutState((state) => state.isSidebarOpen);
  const toggleSidebar = useLayoutState((state) => state.toggleSidebar);
  const { pressEvents } = usePressed(
    () => toggleSidebar(false),
    () => {},
  );

  return (
    <Drawer
      sx={{ '@base': { display: 'flex' }, '@md': { display: 'none' } }}
      //@ts-ignore
      isOpen={isSidebarOpen}
    >
      <DrawerBackdrop {...pressEvents} />

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
    <SideBar
      //@ts-ignore
      autoHide={true}
    >
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
