import { CreateLocationMutationVariables, useCreateLocationMutation } from '@frontend/core/services';
import { useLocationCreateForm } from './useLocationCreateForm';
import { debounce } from 'lodash';

export const useLocationCreateFormSubmit = () => {
  const { mutateAsync } = useCreateLocationMutation();
  const { handleSubmit } = useLocationCreateForm();

  const submitForm = debounce(
    handleSubmit(async (values) => {
      const variables: CreateLocationMutationVariables = {
        name: values.name,
        clientId: values.clientId,
        phone: values.phone,
        address: values?.address?.street,
        city: values?.address?.city,
        addressState: values?.address?.state,
        country: values?.address?.country,
        zipcode: values?.address?.zipcode,
      };

      await mutateAsync(variables);
    }),
    1000,
    { leading: true, trailing: false }
  );

  return submitForm;
};
