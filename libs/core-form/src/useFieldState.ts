// eslint-disable-next-line no-restricted-imports
import { FieldState, FieldSubscription, FormApi } from 'final-form';
import { useEffect, useState } from 'react';

export const useFieldState = <TFormValues extends object>(
  name: keyof TFormValues,
  form: FormApi<TFormValues>,
  subscription?: FieldSubscription,
) => {
  const [fieldState, setFieldState] = useState<FieldState<TFormValues[keyof TFormValues]>>();

  useEffect(() => {
    return form.registerField(
      name,
      (fs) => {
        setFieldState(fs);
      },
      { value: true, error: true, ...subscription },
    );
  }, [name, form, subscription]);

  return fieldState;
};
