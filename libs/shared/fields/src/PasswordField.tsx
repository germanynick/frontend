import React, { useState } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField, InputIcon, EyeIcon, EyeOffIcon, Icon } from '@mylong.frontend/core-ui';
import { FieldState } from '@mylong.frontend/core-form';

export interface IPasswordFieldProps extends IBaseFieldProps {
  field?: FieldState<any>;
}

export const PasswordField: React.FC<IPasswordFieldProps> = ({ label, error, field }) => {
  const [show, setShow] = useState(false);

  return (
    <BaseField label={label} error={error || field?.error}>
      <Input size="sm">
        <InputField
          type={!show ? 'password' : 'text'}
          value={field?.value || ''}
          onBlur={field?.blur}
          onFocus={field?.focus}
          onChangeText={field?.change}
        />
        <InputIcon pr="$3" onPress={() => setShow(!show)}>
          <Icon as={show ? EyeIcon : EyeOffIcon} color="$darkBlue500" />
        </InputIcon>
      </Input>
    </BaseField>
  );
};
