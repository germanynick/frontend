import React, { useState } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField, InputIcon, EyeIcon, EyeOffIcon, Icon } from '@mylong.frontend/core-ui';
import { FieldState } from '@mylong.frontend/core-form';

export interface IPasswordFieldProps extends IBaseFieldProps {
  field?: FieldState<any>;
  placeholder?: string;
}

export const PasswordField: React.FC<IPasswordFieldProps> = ({ label, placeholder, error, field }) => {
  const [show, setShow] = useState(false);

  return (
    <BaseField label={label} error={error || field?.error}>
      <Input>
        <InputField
          type={!show ? 'password' : 'text'}
          value={field?.value || ''}
          onBlur={field?.blur}
          onFocus={field?.focus}
          onChangeText={field?.change}
          placeholder={placeholder}
        />
        <InputIcon onPress={() => setShow(!show)}>
          <Icon as={show ? EyeIcon : EyeOffIcon} />
        </InputIcon>
      </Input>
    </BaseField>
  );
};
