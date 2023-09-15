import { createGlobalForm } from '@mylong.frontend/core-form';
import { yup } from '@mylong.frontend/core-validators';

export const SignInSchema = yup.object({
  email: yup.string().trim().required().email(),
  password: yup.string().trim().required().password(),
});

export const useSignInForm = createGlobalForm(SignInSchema, { initialValues: { email: '', password: '' } });
