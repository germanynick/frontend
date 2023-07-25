import { useForm as useBaseForm, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema, setLocale } from 'yup';
import i18n from '@frontend/core/i18n';

setLocale({
  mixed: {
    required: i18n.t('$ERRORS.REQUIRED'),
  },
  string: {
    email: i18n.t('$ERRORS.EMAIL'),
  },
});

export interface IUseFormProps extends UseFormProps {
  schema?: ObjectSchema<FieldValues>;
}

export const useForm = ({ schema, ...props }: IUseFormProps): UseFormReturn => {
  const resolver = schema ? yupResolver(schema) : props.resolver;

  return useBaseForm({ ...props, resolver });
};
