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

export const useSignInFormSubmit2 = () => {
  const { handleSubmit } = useSignInForm();

  const submitForm = debounce(
    handleSubmit((values) => {
      console.debug('🚀 ~ file: useSignInFormSubmit.ts:24 ~ handleSubmit ~ values:', values);
    }),
    1000,
    { leading: true, trailing: false },
  );

  return submitForm;
};
