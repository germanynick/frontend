// eslint-disable-next-line no-restricted-imports
import { Config, createForm } from 'final-form';
import { create } from 'zustand';
import * as yup from '@mylong.frontend/core-validators';

export const createGlobalForm = <TFormValues extends object>(
  schema?: yup.ObjectSchema<TFormValues>,
  config?: Partial<Config<TFormValues>>,
) => {
  const useGlobalForm = create(() => ({
    form: createForm<TFormValues>({
      validate: schema ? yup.yupResolver(schema) : undefined,
      onSubmit: () => {},
      ...config,
    }),
  }));

  return () => useGlobalForm((state) => state.form);
};
