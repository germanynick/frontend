import { useForm as useBaseForm, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema, setLocale } from 'yup';
import i18n from '@frontend/core/i18n';
import { useMemo } from 'react';

setLocale({
  mixed: {
    required: i18n.t('$ERRORS.REQUIRED'),
  },
  string: {
    email: i18n.t('$ERRORS.EMAIL'),
  },
});

export interface IUseFormProps<T extends FieldValues> extends UseFormProps<T> {
  schema?: ObjectSchema<T>;
}

export const useForm = <T extends FieldValues = FieldValues>({
  schema,
  resolver,
  ...props
}: IUseFormProps<T>): UseFormReturn<T> => {
  const newResolver = useMemo(() => (schema ? yupResolver<T>(schema) : resolver), [schema, resolver]);

  return useBaseForm<T>({ ...props, resolver: newResolver });
};
