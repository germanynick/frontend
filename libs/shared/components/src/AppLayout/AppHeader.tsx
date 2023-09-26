import { Button, ButtonText } from '@mylong.frontend/core-ui';
import { useLayoutState } from '@mylong.frontend/shared-store';

export const AppHeader = () => {
  const toggleSidebar = useLayoutState((state) => state.toggleSidebar);

  return (
    <Button onPress={() => toggleSidebar()}>
      <ButtonText>Show Nav</ButtonText>
    </Button>
  );
};
