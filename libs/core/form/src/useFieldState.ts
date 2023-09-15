// eslint-disable-next-line no-restricted-imports
import { FieldState, FieldSubscription, FormApi } from 'final-form';
import { useEffect, useState } from 'react';

const DEFAULT_SUBCRIPTION: FieldSubscription = {
  value: true,
  error: true,
  touched: true,
  dirty: true,
  active: true,
  initial: true,
  visited: true,
  data: true,
  pristine: true,
  submitting: true,
  invalid: true,
  submitError: true,
  submitFailed: true,
  submitSucceeded: true,
};

export const useFieldState = <TFormValues extends object>(
  name: keyof TFormValues,
  form: FormApi<TFormValues>,
  subscription?: FieldSubscription,
) => {
  const [fieldState, setFieldState] = useState<FieldState<TFormValues[keyof TFormValues]>>(() => {
    let initialState: any = null;

    form.registerField(
      name,
      (fieldState) => {
        initialState = fieldState;
      },
      { ...DEFAULT_SUBCRIPTION, ...subscription },
      { silent: true },
    );

    return initialState;
  });

  useEffect(() => {
    return form.registerField(
      name,
      (fs) => {
        setFieldState(fs);
      },
      { ...DEFAULT_SUBCRIPTION, ...subscription },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return fieldState;
};
