import { forwardRef } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, IInputProps } from 'native-base';

export interface IInputFieldProps extends IInputProps, IBaseFieldProps {}

export const InputField = forwardRef<any, IInputFieldProps>(({ label, error, isRequired, ...props }, ref) => {
  return (
    <BaseField label={label} error={error} isRequired={isRequired}>
      <Input ref={ref as any} {...props} />
    </BaseField>
  );
});
