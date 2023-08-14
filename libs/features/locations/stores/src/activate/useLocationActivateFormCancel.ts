import { debounce } from 'lodash';
import { useLocationActivateState } from './useLocationActivateState';

export const useLocationActivateFormCancel = () => {
  const setShow = useLocationActivateState((state) => state.setShow);

  const cancelForm = debounce(() => setShow(false), 1000, { leading: true, trailing: false });

  return cancelForm;
};
