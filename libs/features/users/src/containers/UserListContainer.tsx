import { Button } from 'native-base';
import { FunctionComponent } from 'react';
import i18n from '@frontend/core/i18n';

export const UserListContainer: FunctionComponent = () => {
  return <Button>{i18n.t('USERS')}</Button>;
};
