import { debounce } from 'lodash';
import { useLocationCreateState } from './useLocationCreateState';

export const useLocationCreateFormCancel = () => {
  const setShow = useLocationCreateState((state) => state.setShow);

  const cancelForm = debounce(() => setShow(false), 1000, { leading: true, trailing: false });

  return cancelForm;
};
