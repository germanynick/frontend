import React, { useState } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField, InputIcon, EyeIcon, EyeOffIcon, InputSlot } from '@mylong.frontend/core-ui';
import { FieldState, useFieldError } from '@mylong.frontend/core-form';

export interface IPasswordFieldProps extends IBaseFieldProps {
  placeholder?: string;
  field: FieldState<any>;
}

export const PasswordField: React.FC<IPasswordFieldProps> = ({ label, placeholder, error, field }) => {
  const [show, setShow] = useState(false);
  const fieldError = useFieldError(field);

  return (
    <BaseField label={label} error={error || fieldError}>
      <Input>
        <InputField
          type={!show ? 'password' : 'text'}
          value={field?.value || ''}
          onBlur={field?.blur}
          onFocus={field?.focus}
          onChangeText={field?.change}
          placeholder={placeholder}
        />
        <InputSlot onPress={() => setShow(!show)}>
          <InputIcon as={show ? EyeIcon : EyeOffIcon} />
        </InputSlot>
      </Input>
    </BaseField>
  );
};
