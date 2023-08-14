import { debounce } from 'lodash';
import { ILocationCreateSchema, useLocationCreateForm } from './useLocationCreateForm';
import { useLocationCreateState } from './useLocationCreateState';

export const useLocationCreateFormStart = () => {
  const { reset } = useLocationCreateForm();
  const setShow = useLocationCreateState((state) => state.setShow);

  const startForm = debounce(
    (defaultValues: ILocationCreateSchema) => {
      reset(defaultValues);
      setShow(true);
    },
    1000,
    { leading: true, trailing: false }
  );

  return startForm;
};
