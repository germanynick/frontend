import { debounce } from 'lodash';
import { useLocationDeactivateState } from './useLocationDeactivateState';

export const useLocationDeactivateFormCancel = () => {
  const setShow = useLocationDeactivateState((state) => state.setShow);

  const cancelForm = debounce(() => setShow(false), 1000, { leading: true, trailing: false });

  return cancelForm;
};
