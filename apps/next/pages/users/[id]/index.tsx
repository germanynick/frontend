import { dehydrate, getQueryClient, useJobQuery } from '@frontend/core/services';
import { UserDetailContainer } from '@frontend/features/users';
import { GetServerSideProps, NextPage } from 'next';
import { IPageProps } from '../../_app';

export const UserDetailPage: NextPage = () => {
  return <UserDetailContainer />;
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const queryClient = getQueryClient();
  const id = 'copy-for-testing-forward-government-analyst-1688013277110';

  await queryClient.prefetchQuery({ queryKey: useJobQuery.getKey({ id }), queryFn: useJobQuery.fetcher({ id }) });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default UserDetailPage;
