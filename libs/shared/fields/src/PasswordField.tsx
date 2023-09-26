import React, { useState } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Input, InputField, InputIcon, EyeIcon, EyeOffIcon, InputSlot } from '@mylong.frontend/core-ui';
import { IFieldController } from '@mylong.frontend/core-form';

export interface IPasswordFieldProps extends IBaseFieldProps {
  placeholder?: string;
  controller: IFieldController<any>;
}

export const PasswordField: React.FC<IPasswordFieldProps> = ({ label, placeholder, error, controller }) => {
  const [show, setShow] = useState(false);

  return (
    <BaseField label={label} error={error || controller?.error}>
      <Input>
        <InputField
          type={!show ? 'password' : 'text'}
          value={controller?.value}
          onBlur={controller?.onBlur}
          onFocus={controller?.onFocus}
          onChangeText={controller?.onChange}
          placeholder={placeholder}
        />
        <InputSlot onPress={() => setShow(!show)}>
          <InputIcon as={show ? EyeIcon : EyeOffIcon} />
        </InputSlot>
      </Input>
    </BaseField>
  );
};
