import { DeactiveLocationMutationVariables, useDeactiveLocationMutation } from '@frontend/core/services';
import { useLocationDeactivateForm } from './useLocationDeactivateForm';
import { debounce } from 'lodash';

export const useLocationDeactivateFormSubmit = () => {
  const { mutateAsync } = useDeactiveLocationMutation();
  const { handleSubmit } = useLocationDeactivateForm();

  const submitForm = debounce(
    handleSubmit(async (values) => {
      const variables: DeactiveLocationMutationVariables = {
        id: values.id,
      };

      await mutateAsync(variables);
    }),
    1000,
    { leading: true, trailing: false }
  );

  return submitForm;
};
