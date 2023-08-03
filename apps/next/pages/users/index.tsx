import { GetServerSideProps, NextPage } from 'next';
import { UserListContainer } from '@frontend/features/users';
import { IPageProps } from '../_app';
import { dehydrate, getQueryClient, useInfiniteJobSearchQuery, useJobSearchQuery } from '@frontend/core/services';

export const UserListPage: NextPage = () => {
  return <UserListContainer />;
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: useInfiniteJobSearchQuery.getKey(),
    queryFn: useJobSearchQuery.fetcher(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default UserListPage;
