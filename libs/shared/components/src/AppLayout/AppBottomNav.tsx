import { FC } from 'react';
import { BottomNav, BottomNavText, BottomNavItem, BottomNavIcon, BottomNavIndicator } from '../BottomNav';
import { Home } from '@mylong.frontend/core-icons';
import { usePathname, useRouter } from '@mylong.frontend/core-router';

const MENU = [
  {
    icon: Home,
    label: 'Home',
    path: '/',
  },
  {
    icon: Home,
    label: 'Button',
    path: '/button',
  },
  {
    icon: Home,
    label: 'Drawer',
    path: '/drawer',
  },
  {
    icon: Home,
    label: 'Input',
    path: '/input',
  },
  {
    icon: Home,
    label: 'Text',
    path: '/text',
  },
  {
    icon: Home,
    label: 'Heading',
    path: '/heading',
  },
];

export const AppBottomNav: FC = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <BottomNav>
      {MENU.map(({ icon, label, path }, index) => (
        <BottomNavItem key={index} states={{ active: path === pathname }} onPress={() => push(path)}>
          <BottomNavIcon as={icon} />
          <BottomNavText>{label}</BottomNavText>
          <BottomNavIndicator />
        </BottomNavItem>
      ))}
    </BottomNav>
  );
};
