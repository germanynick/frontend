import { FunctionComponent } from 'react';
import i18n from '@frontend/core/i18n';
import { GestureResponderEvent } from 'react-native';
import { Modal, HStack, Center, Button, useBreakpointValue, VStack } from 'native-base';
import { CheckboxField, InputField, RadioField, SelectField } from '@frontend/ui/fields';
import { Controller, useForm } from 'react-hook-form';

export interface IUserCreateModalProps {
  isOpen: boolean;
  onClose: (event: GestureResponderEvent) => void;
  onSubmit: (formData: any) => void;
}

export const UserCreateModal: FunctionComponent<IUserCreateModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const size = useBreakpointValue({ base: 'full', xl: 'lg' });
  const { control, handleSubmit } = useForm();

  return (
    <Modal isOpen={isOpen} size={size}>
      <Modal.Content>
        <Modal.CloseButton onPress={onClose}></Modal.CloseButton>
        <Modal.Header>{i18n.t('CREATE_USER')}</Modal.Header>
        <Modal.Body>
          <VStack space={2}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'Required' }}
              render={({ field, fieldState }) => (
                <InputField
                  ref={field.ref}
                  error={fieldState?.error?.message}
                  id={field.name}
                  value={field.value}
                  label={i18n.t('FIRST_NAME')}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  isRequired={true}
                  placeholder={i18n.t('$PLACEHOLDERS.FIRST_NAME')}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'Required' }}
              render={({ field, fieldState }) => (
                <InputField
                  ref={field.ref}
                  value={field.value}
                  error={fieldState?.error?.message}
                  id={field.name}
                  label={i18n.t('LAST_NAME')}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  isRequired={true}
                  placeholder={i18n.t('$PLACEHOLDERS.FIRST_NAME')}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{ required: 'Required' }}
              render={({ field, fieldState }) => (
                <InputField
                  ref={field.ref}
                  error={fieldState?.error?.message}
                  id={field.name}
                  value={field.value}
                  label={i18n.t('EMAIL')}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  isRequired={true}
                  placeholder={i18n.t('$PLACEHOLDERS.FIRST_NAME')}
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              rules={{ required: 'Required' }}
              render={({ field, fieldState }) => (
                <RadioField
                  ref={field.ref}
                  name={field.name}
                  value={field.value}
                  error={fieldState?.error?.message}
                  label={i18n.t('GENDER')}
                  onChange={field.onChange}
                  isRequired={true}
                  options={[
                    { label: i18n.t('MALE'), value: 'male' },
                    { label: i18n.t('FEMALE'), value: 'female' },
                  ]}
                />
              )}
            />
            <Controller
              name="hobbies"
              control={control}
              rules={{ required: 'Required' }}
              render={({ field, fieldState }) => (
                <CheckboxField
                  ref={field.ref}
                  name={field.name}
                  value={field.value}
                  error={fieldState?.error?.message}
                  label={i18n.t('HOBBIES')}
                  onChange={field.onChange}
                  isRequired={true}
                  options={[
                    { label: i18n.t('COMPUTER'), value: 'computer' },
                    { label: i18n.t('BOOK'), value: 'book' },
                  ]}
                />
              )}
            />

            <Controller
              name="major"
              control={control}
              rules={{ required: 'Required' }}
              render={({ field, fieldState }) => (
                <SelectField
                  ref={field.ref}
                  name={field.name}
                  error={fieldState?.error?.message}
                  label={i18n.t('MAJOR')}
                  selectedValue={field.value}
                  onValueChange={field.onChange}
                  isRequired={true}
                  placeholder={i18n.t('$PLACEHOLDERS.FIRST_NAME')}
                  options={[
                    { label: i18n.t('COMPUTER'), value: 'computer' },
                    { label: i18n.t('BOOK'), value: 'book' },
                  ]}
                />
              )}
            />
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <HStack space={2} width="full">
            <Center flexGrow={1} flexBasis={0}>
              <Button width="full" variant="outline" onPress={onClose}>
                {i18n.t('CANCEL')}
              </Button>
            </Center>
            <Center flexGrow={1} flexBasis={0}>
              <Button width="full" onPress={handleSubmit(onSubmit)}>
                {i18n.t('CREATE')}
              </Button>
            </Center>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
