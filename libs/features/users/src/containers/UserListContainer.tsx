import { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { userCreateStore, userListStore } from '../stores';
import { UserList } from '../components/UserList';
import { Button, VStack, HStack, Center, AddIcon, Input, SearchIcon } from 'native-base';
import i18n from '@frontend/core/i18n';
import { UserCreateContainer } from './UserCreateContainer';
import { debounce } from 'lodash';

export const UserListContainer: FunctionComponent = observer(() => {
  const { items, loading, handleKeywordChangeAsync, handleLoadMoreItemsAsync } = userListStore;
  const { handleClickCreate } = userCreateStore;

  useEffect(() => {
    handleKeywordChangeAsync('');
  }, []);

  return (
    <VStack space={2} margin={2} maxHeight="full">
      <HStack space={2}>
        <Center>
          <Button startIcon={<AddIcon />} onPress={handleClickCreate}>
            {i18n.t('CREATE_USER')}
          </Button>
        </Center>
        <Center marginLeft="auto">
          <Input
            InputRightElement={<SearchIcon />}
            placeholder={i18n.t('$PLACEHOLDERS.SEARCH')}
            onChangeText={debounce(handleKeywordChangeAsync, 500)}
          />
        </Center>
      </HStack>

      <UserList data={items} loading={loading} onScrollToEnd={handleLoadMoreItemsAsync} />
      <UserCreateContainer />
    </VStack>
  );
});
