import { UseFormReturn } from 'react-hook-form';
import { ILocationCreateSchema } from '@frontend/features/locations/stores';
import { FC } from 'react';
import { VStack } from 'native-base';
import { InputFieldController, SelectFieldController } from '@frontend/core/form';
import i18n from '@frontend/core/i18n';
import { ISelectOption } from '@frontend/ui/fields';

export interface ILocationCreateFormProps {
  form: UseFormReturn<ILocationCreateSchema>;
  clientOptions: ISelectOption[];
}

export const LocationCreateForm: FC<ILocationCreateFormProps> = ({ form, clientOptions }) => {
  const { control } = form;

  return (
    <VStack space={2}>
      <InputFieldController
        name="name"
        control={control}
        label={i18n.t('NAME')}
        placeholder={i18n.t('$PLACEHOLDERS.NAME')}
        isRequired={true}
      />
      <SelectFieldController
        name="clientId"
        control={control}
        label={i18n.t('CLIENT')}
        placeholder={i18n.t('$PLACEHOLDERS.CLIENT')}
        isRequired={true}
        options={clientOptions}
      />
    </VStack>
  );
};
