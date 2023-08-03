import { useJobQuery } from '@frontend/core/services';
import { useRouter } from 'next/router';
import { Button } from 'native-base';
import { FunctionComponent } from 'react';

export const UserDetailContainer: FunctionComponent = () => {
  const { push } = useRouter();
  const { data } = useJobQuery({ id: 'copy-for-testing-forward-government-analyst-1688013277110' });

  return <Button onPress={() => push('/users')}>{data?.job?.address}</Button>;
};
