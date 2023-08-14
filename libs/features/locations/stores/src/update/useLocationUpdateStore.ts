import { useLocationUpdateForm } from './useLocationUpdateForm';
import { useLocationUpdateFormStart } from './useLocationUpdateFormStart';
import { useLocationUpdateFormCancel } from './useLocationUpdateFormCancel';
import { useLocationUpdateFormSubmit } from './useLocationUpdateFormSubmit';
import { useLocationUpdateState } from './useLocationUpdateState';

export const useLocationUpdateStore = () => {
  const show = useLocationUpdateState((state) => state.show);
  const form = useLocationUpdateForm();
  const startForm = useLocationUpdateFormStart();
  const cancelForm = useLocationUpdateFormCancel();
  const submitForm = useLocationUpdateFormSubmit();

  return {
    show,
    form,
    startForm,
    cancelForm,
    submitForm,
  };
};
