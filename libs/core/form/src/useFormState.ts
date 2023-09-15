// eslint-disable-next-line no-restricted-imports
import { FormApi, FormState, FormSubscription } from 'final-form';
import { useEffect, useState } from 'react';

const DEFAULT_SUBCRIPTION: FormSubscription = {
  error: true,
  touched: true,
  dirty: true,
  active: true,
  visited: true,
  pristine: true,
  submitting: true,
  submitError: true,
  submitFailed: true,
  submitSucceeded: true,
};

export const useFormState = <TFormValues extends object>(
  form: FormApi<TFormValues>,
  subscription?: FormSubscription,
) => {
  const [formState, setFormState] = useState<FormState<TFormValues>>(() => {
    let initialFormState: any = null;
    form.subscribe(
      (formState) => {
        initialFormState = formState;
      },
      { ...DEFAULT_SUBCRIPTION, ...subscription },
    );

    return initialFormState;
  });

  useEffect(() => {
    return form.subscribe(
      (fs) => {
        setFormState(fs);
      },
      { ...DEFAULT_SUBCRIPTION, ...subscription },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return formState;
};
