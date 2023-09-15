import { debounce } from 'lodash';
import { useSignInForm } from './useSignInForm';

export const useSignInFormSubmit = () => {
  const { handleSubmit } = useSignInForm();

  const submitForm = debounce(
    handleSubmit((values) => {
      console.log(values);
    }),
    1000,
    { leading: true, trailing: false },
  );

  return submitForm;
};
