import { RadioField, IRadioFieldProps } from '@frontend/ui/fields';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';

export interface IRadioFieldController extends IRadioFieldProps {
  name: string;
  control: Control<any>;
}

export const RadioFieldController: FC<IRadioFieldController> = ({ name, control, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <RadioField
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
