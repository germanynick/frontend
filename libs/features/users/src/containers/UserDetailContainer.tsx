import { useJobQuery } from '@frontend/core/services';
import { Button } from 'native-base';
import { FunctionComponent } from 'react';

export const UserDetailContainer: FunctionComponent = () => {
  const { data } = useJobQuery({ id: 'copy-for-testing-forward-government-analyst-1688013277110' });

  return <Button>{data?.job?.address}</Button>;
};
