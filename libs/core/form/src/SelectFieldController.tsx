import { SelectField, ISelectFieldProps } from '@frontend/ui/fields';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';

export interface ISelectFieldController extends ISelectFieldProps {
  name: string;
  control: Control<any>;
}

export const SelectFieldController: FC<ISelectFieldController> = ({ name, control, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <SelectField
          ref={field.ref}
          name={field.name}
          error={fieldState?.error?.message}
          selectedValue={field.value}
          onValueChange={field.onChange}
          {...props}
        />
      )}
    />
  );
};
