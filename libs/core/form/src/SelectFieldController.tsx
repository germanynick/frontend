import { SelectField, ISelectFieldProps } from '@frontend/ui/fields';
import { FunctionComponent } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

export interface ISelectFieldController extends ISelectFieldProps {
  name: string;
  control: Control<FieldValues>;
}

export const SelectFieldController: FunctionComponent<ISelectFieldController> = ({ name, control, ...props }) => {
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
