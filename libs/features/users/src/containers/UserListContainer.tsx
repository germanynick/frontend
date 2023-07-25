import { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { userListStore } from '../stores';
import { UserList } from '../components/UserList';
import { Button, VStack, HStack, Center, ArrowDownIcon, AddIcon } from 'native-base';
import i18n from '@frontend/core/i18n';

export const UserListContainer: FunctionComponent = observer(() => {
  const { items, handleRefreshItems } = userListStore;

  useEffect(() => {
    handleRefreshItems();
  }, []);

  return (
    <VStack space={2} margin={2} maxHeight="full">
      <HStack space={2}>
        <Center>
          <Button startIcon={<ArrowDownIcon />}>{i18n.t('EXPORT')}</Button>
        </Center>
        <Center>
          <Button startIcon={<AddIcon />}>{i18n.t('CREATE_USER')}</Button>
        </Center>
      </HStack>

      <UserList items={items} />
    </VStack>
  );
});
