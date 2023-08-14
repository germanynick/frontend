import { useLocationActivateForm } from './useLocationActivateForm';
import { useLocationActivateFormStart } from './useLocationActivateFormStart';
import { useLocationActivateFormCancel } from './useLocationActivateFormCancel';
import { useLocationActivateFormSubmit } from './useLocationActivateFormSubmit';
import { useLocationActivateState } from './useLocationActivateState';

export const useLocationActivateStore = () => {
  const show = useLocationActivateState((state) => state.show);
  const form = useLocationActivateForm();
  const startForm = useLocationActivateFormStart();
  const cancelForm = useLocationActivateFormCancel();
  const submitForm = useLocationActivateFormSubmit();

  return {
    show,
    form,
    startForm,
    cancelForm,
    submitForm,
  };
};
