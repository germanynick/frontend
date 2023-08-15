import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { UserList } from '../components/UserList';
import { VStack } from 'native-base';
import { UserCreateContainer } from './UserCreateContainer';
import { UserListHeader } from '../components/UserListHeader';
import { useUserCreateStore, useUserListStore } from '../stores';

export const UserListContainer: FC = observer(() => {
  const { handleKeywordChange, handleScroll, items, loading } = useUserListStore();
  const { handleClickCreate } = useUserCreateStore();

  return (
    <VStack space={2} margin={2} maxHeight="full">
      <UserListHeader onClickCreate={handleClickCreate} onSearchChange={handleKeywordChange} />

      <UserList data={items} loading={loading} onScroll={handleScroll} />
      <UserCreateContainer />
    </VStack>
  );
});
