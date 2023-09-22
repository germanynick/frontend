import { Button, ButtonText } from '@mylong.frontend/core-ui';
import { useLayoutState } from './useLayoutState';

export const AppHeader = () => {
  const toggleSidebar = useLayoutState((state) => state.toggleSidebar);

  return (
    <Button onPress={toggleSidebar}>
      <ButtonText>Trigger</ButtonText>
    </Button>
  );
};
