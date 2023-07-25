import { ReactNode, forwardRef } from 'react';
import { BaseField, IBaseFieldProps } from './BaseField';
import { Radio, IRadioGroupProps, Text, IRadioProps, ITextProps } from 'native-base';

export interface IRadioOption {
  label?: string;
  value?: any;
  _radio?: IRadioProps;
  _text?: ITextProps;
}

export interface IRadioFieldProps extends IRadioGroupProps, IBaseFieldProps {
  options?: IRadioOption[];
  children?: ReactNode;
}

export const RadioField = forwardRef<any, IRadioFieldProps>(({ label, error, isRequired, options, ...props }, ref) => {
  return (
    <BaseField label={label} error={error} isRequired={isRequired}>
      <Radio.Group ref={ref as any} flexDirection="column" {...props}>
        {options?.map(({ value, label, _radio, _text }) => (
          <Radio size="sm" my={1} key={value} value={value} {..._radio}>
            <Text {..._text}>{label}</Text>
          </Radio>
        ))}
      </Radio.Group>
    </BaseField>
  );
});
