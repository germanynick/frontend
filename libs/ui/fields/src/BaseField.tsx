import { FormControl } from 'native-base';
import { FunctionComponent, ReactNode } from 'react';

export interface IBaseFieldProps {
  label?: string;
  error?: string;
  children?: ReactNode;
  isRequired?: boolean;
}

export const BaseField: FunctionComponent<IBaseFieldProps> = ({ label, error, children, isRequired }) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      {children}
      {error && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
    </FormControl>
  );
};
