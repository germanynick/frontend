import { debounce } from 'lodash';
import { ILocationUpdateSchema, useLocationUpdateForm } from './useLocationUpdateForm';
import { useLocationUpdateState } from './useLocationUpdateState';

export const useLocationUpdateFormStart = () => {
  const { reset } = useLocationUpdateForm();

  const setShow = useLocationUpdateState((state) => state.setShow);

  const startForm = debounce(
    async (id: string, defaultValues?: ILocationUpdateSchema) => {
      reset({ id, ...defaultValues });
      setShow(true);
    },
    1000,
    { leading: true, trailing: false }
  );

  return startForm;
};
