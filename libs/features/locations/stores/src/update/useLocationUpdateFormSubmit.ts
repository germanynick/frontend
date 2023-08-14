import { UpdateLocationMutationVariables, useUpdateLocationMutation } from '@frontend/core/services';
import { useLocationUpdateForm } from './useLocationUpdateForm';
import { debounce } from 'lodash';

export const useLocationUpdateFormSubmit = () => {
  const { mutateAsync } = useUpdateLocationMutation();
  const { handleSubmit } = useLocationUpdateForm();

  const submitForm = debounce(
    handleSubmit(async (values) => {
      const variables: UpdateLocationMutationVariables = {
        id: values.id,
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
