import { FC } from 'react';
import { UserCreateModal } from '../components/UserCreateModal';
import { observer } from 'mobx-react-lite';
import { useUserCreateStore } from '../stores';

export const UserCreateContainer: FC = observer(() => {
  const { showModal, handleCancelCreate, handleSubmitCreate } = useUserCreateStore();

  if (!showModal) {
    return null;
  }

  return <UserCreateModal isOpen={true} onClose={handleCancelCreate} onSubmit={handleSubmitCreate} />;
});
