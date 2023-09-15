// eslint-disable-next-line no-restricted-imports
import * as yup from 'yup';
import { set } from 'lodash';

export const yupResolver =
  <TFormValues extends object>(schema: yup.ObjectSchema<TFormValues>) =>
  async (values: TFormValues) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (e: any) {
      return e.inner.reduce((errors: any, error: any) => {
        return set(errors, error.path, error.message);
      }, {});
    }
  };
