import React from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField as BaseInputField } from '@mylong.frontend/core-ui';
import { IFieldController } from '@mylong.frontend/core-form';

export interface IInputFieldProps extends IBaseFieldProps {
  controller?: IFieldController<any>;
  placeholder?: string;
}

export const InputField: React.FC<IInputFieldProps> = ({ label, error, placeholder, controller }) => {
  return (
    <BaseField label={label} error={error || controller?.error}>
      <Input>
        <BaseInputField
          value={controller?.value}
          onBlur={controller?.onBlur}
          onFocus={controller?.onFocus}
          onChangeText={controller?.onChange}
          placeholder={placeholder}
        />
      </Input>
    </BaseField>
  );
};
