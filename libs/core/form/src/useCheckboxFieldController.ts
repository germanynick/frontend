import { UseControllerProps, useController } from 'react-hook-form';

export const useCheckboxFieldController = (props: UseControllerProps) => {
  const { field, fieldState } = useController(props);

  return {
    ...field,
    error: fieldState?.error?.message,
  };
};
