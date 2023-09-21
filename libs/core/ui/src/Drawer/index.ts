import { createDrawer } from './createDrawer';
import { Root } from './styles/Root';
import { Backdrop } from './styles/Backdrop';
import { Content } from './styles/Content';

const Base = createDrawer({
  Drawer: Root,
  DrawerBackdrop: Backdrop,
  DrawerContent: Content,
});

export const Drawer = Base.Drawer;
export const DrawerContent = Base.DrawerContent;
export const DrawerBackdrop = Base.DrawerBackdrop;
