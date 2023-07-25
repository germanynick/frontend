import { FunctionComponent } from 'react';
import { UserCreateModal } from '../components/UserCreateModal';
import { observer } from 'mobx-react-lite';
import { userCreateStore } from '../stores';

export const UserCreateContainer: FunctionComponent = observer(() => {
  const { createValue, handleCancelCreate, handleSubmitCreate } = userCreateStore;

  console.log(createValue);

  if (!createValue) {
    return null;
  }

  return <UserCreateModal isOpen={true} onClose={handleCancelCreate} onSubmit={handleSubmitCreate} />;
});
