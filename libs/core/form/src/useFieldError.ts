// eslint-disable-next-line no-restricted-imports
import { FieldState } from 'final-form';
import { useMemo } from 'react';

export const useFieldError = ({
  invalid,
  submitFailed,
  submitSucceeded,
  touched,
  visited,
  error,
  submitError,
}: FieldState<any>) => {
  const finalError = useMemo(() => {
    const show = invalid && (touched || visited || submitFailed || submitSucceeded);

    return show ? error || submitError : undefined;
  }, [invalid, touched, visited, submitFailed, submitSucceeded, error, submitError]);

  return finalError;
};
