import { debounce } from 'lodash';
import { ILocationDeactivateSchema, useLocationDeactivateForm } from './useLocationDeactivateForm';
import { useLocationDeactivateState } from './useLocationDeactivateState';

export const useLocationDeactivateFormStart = () => {
  const { reset } = useLocationDeactivateForm();

  const setShow = useLocationDeactivateState((state) => state.setShow);

  const startForm = debounce(
    async (id: string, defaultValues?: Partial<ILocationDeactivateSchema>) => {
      reset({ id, ...defaultValues });
      setShow(true);
    },
    1000,
    { leading: true, trailing: false }
  );

  return startForm;
};
