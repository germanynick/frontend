import { useLocationCreateForm } from './useLocationCreateForm';
import { useLocationCreateFormStart } from './useLocationCreateFormStart';
import { useLocationCreateFormCancel } from './useLocationCreateFormCancel';
import { useLocationCreateFormSubmit } from './useLocationCreateFormSubmit';
import { useLocationCreateState } from './useLocationCreateState';

export const useLocationCreateStore = () => {
  const show = useLocationCreateState((state) => state.show);
  const form = useLocationCreateForm();
  const startForm = useLocationCreateFormStart();
  const cancelForm = useLocationCreateFormCancel();
  const submitForm = useLocationCreateFormSubmit();

  return {
    show,
    form,
    startForm,
    cancelForm,
    submitForm,
  };
};
