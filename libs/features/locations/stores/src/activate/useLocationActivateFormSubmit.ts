import { ActiveLocationMutationVariables, useActiveLocationMutation } from '@frontend/core/services';
import { useLocationActivateForm } from './useLocationActivateForm';
import { debounce } from 'lodash';

export const useLocationActivateFormSubmit = () => {
  const { mutateAsync } = useActiveLocationMutation();
  const { handleSubmit } = useLocationActivateForm();

  const submitForm = debounce(
    handleSubmit(async (values) => {
      const variables: ActiveLocationMutationVariables = {
        id: values.id,
      };

      await mutateAsync(variables);
    }),
    1000,
    { leading: true, trailing: false }
  );

  return submitForm;
};
