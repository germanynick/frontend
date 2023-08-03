import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { userCreateStore, userListStore } from '../stores';
import { UserList } from '../components/UserList';
import { Button, VStack, HStack, Center, AddIcon, Input, SearchIcon } from 'native-base';
import i18n from '@frontend/core/i18n';
import { UserCreateContainer } from './UserCreateContainer';
import { debounce } from 'lodash';
import { useInfiniteJobSearchQuery } from '@frontend/core/services';

export const UserListContainer: FunctionComponent = observer(() => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteJobSearchQuery('offset', undefined, {
    getNextPageParam: (lastPage, allPages) => {
      const total = allPages.length * 20;

      return (total <= (lastPage.jobSearch?.totalCount || 0) && { offset: total }) || null;
    },
  });

  const { handleKeywordChangeAsync } = userListStore;
  const { handleClickCreate } = userCreateStore;

  const flat = data?.pages?.flatMap((item) => item.jobSearch?.jobs);

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

      <UserList
        data={flat}
        loading={isLoading || isFetchingNextPage}
        onScrollToEnd={debounce(() => fetchNextPage(), 500)}
      />
      <UserCreateContainer />
    </VStack>
  );
});
