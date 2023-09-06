import React from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField as BaseInputField } from '@mylong.frontend/core-ui';
import { FieldState } from '@mylong.frontend/core-form';

export interface IInputFieldProps extends IBaseFieldProps {
  field?: FieldState<any>;
}

export const InputField: React.FC<IInputFieldProps> = ({ label, error, field }) => {
  return (
    <BaseField label={label} error={error || field?.error}>
      <Input size="sm">
        <BaseInputField
          value={field?.value || ''}
          onBlur={field?.blur}
          onFocus={field?.focus}
          onChangeText={field?.change}
        />
      </Input>
    </BaseField>
  );
};
