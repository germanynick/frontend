import { Home, Menu } from '@mylong.frontend/core-icons';
import { HStack, Link, Text, VStack } from '@mylong.frontend/core-ui';

export const IconStory = () => {
  return (
    <>
      <Text>
        Please using this website to search icons:
        <Link href="https://lucide.dev/icons/"> https://lucide.dev/icons/</Link>
      </Text>
      <HStack space="md">
        <VStack space="sm">
          <Home />
          <Text>Home</Text>
        </VStack>
        <VStack space="sm">
          <Menu />
          <Text>Menu</Text>
        </VStack>
      </HStack>
    </>
  );
};
