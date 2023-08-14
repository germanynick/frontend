import { useLocationDeactivateForm } from './useLocationDeactivateForm';
import { useLocationDeactivateFormStart } from './useLocationDeactivateFormStart';
import { useLocationDeactivateFormCancel } from './useLocationDeactivateFormCancel';
import { useLocationDeactivateFormSubmit } from './useLocationDeactivateFormSubmit';
import { useLocationDeactivateState } from './useLocationDeactivateState';

export const useLocationDeactivateStore = () => {
  const show = useLocationDeactivateState((state) => state.show);
  const form = useLocationDeactivateForm();
  const startForm = useLocationDeactivateFormStart();
  const cancelForm = useLocationDeactivateFormCancel();
  const submitForm = useLocationDeactivateFormSubmit();

  return {
    show,
    form,
    startForm,
    cancelForm,
    submitForm,
  };
};
