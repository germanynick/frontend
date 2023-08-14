import { CheckboxField, ICheckboxFieldProps } from '@frontend/ui/fields';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';

export interface ICheckboxFieldController extends ICheckboxFieldProps {
  name: string;
  control: Control<any>;
}

export const CheckboxFieldController: FC<ICheckboxFieldController> = ({ name, control, ...props }) => {
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
