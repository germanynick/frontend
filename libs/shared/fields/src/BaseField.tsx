import {
  FormControl,
  FormControlLabel,
  FormControlError,
  FormControlErrorText,
  FormControlLabelText,
} from '@mylong.frontend/core-ui';
import React from 'react';

export interface IBaseFieldProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  children?: React.ReactNode;
}

export const BaseField: React.FC<IBaseFieldProps> = ({ label, error, children }) => {
  return (
    <FormControl width="$full" isInvalid={!!error}>
      {typeof label === 'string' ? (
        <FormControlLabel>
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      ) : (
        label
      )}
      {children}
      {typeof error === 'string' ? (
        <FormControlError>
          <FormControlErrorText>{error}</FormControlErrorText>
        </FormControlError>
      ) : (
        error
      )}
    </FormControl>
  );
};
