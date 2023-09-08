import React from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField as BaseInputField } from '@mylong.frontend/core-ui';
import { FieldState, useFieldError } from '@mylong.frontend/core-form';

export interface IInputFieldProps extends IBaseFieldProps {
  field: FieldState<any>;
  placeholder?: string;
}

export const InputField: React.FC<IInputFieldProps> = ({ label, error, placeholder, field }) => {
  const fieldError = useFieldError(field);

  return (
    <BaseField label={label} error={error || fieldError}>
      <Input>
        <BaseInputField
          value={field?.value || ''}
          onBlur={field?.blur}
          onFocus={field?.focus}
          onChangeText={field.change}
          placeholder={placeholder}
        />
      </Input>
    </BaseField>
  );
};
