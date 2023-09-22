import { Overlay } from '@gluestack-ui/overlay';
import { ComponentType, forwardRef } from 'react';
import { useDebounce } from 'ahooks';

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
  const Base: ComponentType<DrawerProps> = forwardRef<DrawerProps, any>(({ isOpen, ...props }: any, ref: any) => {
    const debounceValue = useDebounce(isOpen, { wait: 500, leading: false, trailing: true });

    return (
      <Overlay isOpen={isOpen ? isOpen : debounceValue}>
        <Drawer ref={ref} isOpen={isOpen} {...props} />
      </Overlay>
    );
  }) as any;

  return {
    Drawer: Base,
    DrawerBackdrop,
    DrawerContent,
  };
};
