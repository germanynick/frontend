import { IInputFieldProps, InputField } from '@frontend/ui/fields';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';

export interface IInputFieldController extends IInputFieldProps {
  name: string;
  control: Control<any>;
}

export const InputFieldController: FC<IInputFieldController> = ({ name, control, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <InputField
          ref={field.ref}
          error={fieldState?.error?.message}
          id={field.name}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
      )}
    />
  );
};
