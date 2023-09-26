import { usePressed } from '@gluestack-ui/react-native-aria';
import { useState } from 'react';

import {
  Drawer,
  DrawerContent,
  DrawerBackdrop,
  Button,
  ButtonText,
  HStack,
  Center,
  Text,
  Slide,
} from '@mylong.frontend/core-ui';

const ANCHORS = ['left', 'right', 'top', 'bottom'];

const BaseDrawer = ({ anchor }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pressEvents: buttonEvents } = usePressed(
    () => setIsOpen(true),
    () => {},
  );

  const { pressEvents: backdropEvents } = usePressed(
    () => setIsOpen(false),
    () => {},
  );

  return (
    <>
      <Button {...buttonEvents}>
        <ButtonText>{anchor}</ButtonText>
      </Button>
      <Drawer isOpen={isOpen}>
        <DrawerBackdrop {...backdropEvents} />
        <DrawerContent anchor={anchor}>
          <Center minWidth="$20" minHeight="$20">
            <Text>{anchor}</Text>
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const DrawerStory = () => {
  return (
    <Slide isOpen={true}>
      <HStack space="md">
        {ANCHORS.map((anchor) => {
          return <BaseDrawer key={anchor} anchor={anchor} />;
        })}
      </HStack>
    </Slide>
  );
};
