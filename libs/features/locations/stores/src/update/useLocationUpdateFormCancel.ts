import { debounce } from 'lodash';
import { useLocationUpdateState } from './useLocationUpdateState';

export const useLocationUpdateFormCancel = () => {
  const setShow = useLocationUpdateState((state) => state.setShow);

  const cancelForm = debounce(() => setShow(false), 1000, { leading: true, trailing: false });

  return cancelForm;
};
