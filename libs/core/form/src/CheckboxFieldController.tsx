import { CheckboxField, ICheckboxFieldProps } from '@frontend/ui/fields';
import { FunctionComponent } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

export interface ICheckboxFieldController extends ICheckboxFieldProps {
  name: string;
  control: Control<FieldValues>;
}

export const CheckboxFieldController: FunctionComponent<ICheckboxFieldController> = ({ name, control, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <CheckboxField
          ref={field.ref}
          name={field.name}
          value={field.value}
          error={fieldState?.error?.message}
          onChange={field.onChange}
          {...props}
        />
      )}
    />
  );
};
