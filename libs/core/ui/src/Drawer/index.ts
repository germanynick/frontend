import { createDrawer } from './createDrawer';
import { Drawer as Root } from './styles/Drawer';
import { DrawerBackdrop as Backdrop } from './styles/DrawerBackdrop';
import { DrawerContent as Content } from './styles/DrawerContent';

const Base = createDrawer({
  Drawer: Root,
  DrawerBackdrop: Backdrop,
  DrawerContent: Content,
});

export const Drawer = Base.Drawer;
export const DrawerContent = Base.DrawerContent;
export const DrawerBackdrop = Base.DrawerBackdrop;
