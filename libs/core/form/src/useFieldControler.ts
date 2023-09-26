// eslint-disable-next-line no-restricted-imports
import { FormApi } from 'final-form';
import { useFieldState } from './useFieldState';
import { useFieldError } from './useFieldError';

export interface IFieldController<TFormValues extends object> {
  value?: TFormValues[keyof TFormValues];
  error?: any;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (value?: TFormValues[keyof TFormValues]) => void;
}

export const useFieldController = <TFormValues extends object>(
  name: keyof TFormValues,
  form: FormApi<TFormValues>,
): IFieldController<TFormValues> => {
  const fieldState = useFieldState(name, form);

  const fieldError = useFieldError(fieldState);

  return {
    value: fieldState.value,
    onBlur: fieldState.blur,
    onChange: fieldState.change,
    onFocus: fieldState.focus,
    error: fieldError,
  };
};
