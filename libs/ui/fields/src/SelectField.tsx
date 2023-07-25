import { ReactNode, forwardRef } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Select, ISelectProps, ChevronDownIcon, Text } from 'native-base';
import { Platform } from 'react-native';

export interface ISelectOption {
  label: string;
  value: any;
}
export interface ISelectFieldProps extends ISelectProps, IBaseFieldProps {
  name?: string;
  options?: ISelectOption[];
  children?: ReactNode;
}

export const SelectField = forwardRef<any, ISelectFieldProps>(({ label, error, isRequired, options, ...props }, ref) => {
  if (Platform.OS !== 'web') {
    return <Text color="error.600">//TODO: Support SelectField for mobile device</Text>;
  }

  return (
    <BaseField label={label} error={error} isRequired={isRequired}>
      <Select ref={ref as any} accessibilityLabel={label} dropdownIcon={<ChevronDownIcon />} {...props}>
        {options?.map(({ label, value }) => (
          <Select.Item key={value} label={label} value={value} />
        ))}
      </Select>
    </BaseField>
  );
});
