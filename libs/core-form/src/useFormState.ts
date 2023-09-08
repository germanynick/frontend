// eslint-disable-next-line no-restricted-imports
import { FormApi, FormState, FormSubscription } from 'final-form';
import { useEffect, useState } from 'react';

export const useFormState = <TFormValues extends object>(
  form: FormApi<TFormValues>,
  subscription?: FormSubscription,
) => {
  const [formState, setFormState] = useState<FormState<TFormValues>>();

  useEffect(() => {
    return form.subscribe(
      (fs) => {
        setFormState(fs);
      },
      { active: true, pristine: true, submitting: true, values: true, ...subscription },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return formState;
};
