import { Overlay } from '@gluestack-ui/overlay';
import { ComponentType } from 'react';

export interface ICreateDrawerProps<DrawerProps, DrawerContentProps, DrawerBackdropProps> {
  Drawer: ComponentType<DrawerProps>;
  DrawerContent: ComponentType<DrawerContentProps>;
  DrawerBackdrop: ComponentType<DrawerBackdropProps>;
}

export const createDrawer = <DrawerProps, DrawerContentProps, DrawerBackdropProps>({
  Drawer,
  DrawerBackdrop,
  DrawerContent,
}: ICreateDrawerProps<DrawerProps, DrawerContentProps, DrawerBackdropProps>) => {
  const Base: ComponentType<DrawerProps> = ({ isOpen, ...props }: any) => {
    if (!isOpen) {
      return null;
    }

    return (
      <Overlay isOpen={true}>
        <Drawer isOpen={true} {...props} />
      </Overlay>
    );
  };

  return {
    Drawer: Base,
    DrawerBackdrop,
    DrawerContent,
  };
};
