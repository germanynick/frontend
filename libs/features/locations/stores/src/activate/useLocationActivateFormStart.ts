import { debounce } from 'lodash';
import { ILocationActivateSchema, useLocationActivateForm } from './useLocationActivateForm';
import { useLocationActivateState } from './useLocationActivateState';

export const useLocationActivateFormStart = () => {
  const { reset } = useLocationActivateForm();

  const setShow = useLocationActivateState((state) => state.setShow);

  const startForm = debounce(
    async (id: string, defaultValues?: Partial<ILocationActivateSchema>) => {
      reset({ id, ...defaultValues });
      setShow(true);
    },
    1000,
    { leading: true, trailing: false }
  );

  return startForm;
};
