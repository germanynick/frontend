import { ReactNode, forwardRef } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Checkbox, ICheckboxGroupProps, Text, ICheckboxProps, ITextProps } from 'native-base';

export interface ICheckboxOption {
  label?: string;
  value?: any;
  _checkbox?: ICheckboxProps;
  _text?: ITextProps;
}

export interface ICheckboxFieldProps extends ICheckboxGroupProps, IBaseFieldProps {
  name?: string;
  options?: ICheckboxOption[];
  children?: ReactNode;
}

export const CheckboxField = forwardRef<any, ICheckboxFieldProps>(({ label, error, isRequired, options, ...props }, ref) => {
  return (
    <BaseField label={label} error={error} isRequired={isRequired}>
      <Checkbox.Group flexDirection="column" {...props}>
        {options?.map(({ value, label, _checkbox, _text }, index) => (
          <Checkbox ref={ref as any} size="sm" my={1} key={value} value={value} {..._checkbox}>
            <Text {..._text}>{label}</Text>
          </Checkbox>
        ))}
      </Checkbox.Group>
    </BaseField>
  );
});
