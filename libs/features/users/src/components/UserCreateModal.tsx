import { FC } from 'react';
import i18n from '@frontend/core/i18n';
import { GestureResponderEvent } from 'react-native';
import { Modal, HStack, Center, Button, useBreakpointValue, VStack } from 'native-base';

import {
  useForm,
  CheckboxFieldController,
  InputFieldController,
  RadioFieldController,
  SelectFieldController,
} from '@frontend/core/form';
import { UserCreateSchema } from '../schemas';

export interface IUserCreateModalProps {
  isOpen: boolean;
  onClose: (event: GestureResponderEvent) => void;
  onSubmit: (formData: any) => void;
}

export const UserCreateModal: FC<IUserCreateModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const size = useBreakpointValue({ base: 'full', xl: 'lg' });
  const { control, handleSubmit } = useForm({ schema: UserCreateSchema });

  return (
    <Modal isOpen={isOpen} size={size}>
      <Modal.Content>
        <Modal.CloseButton onPress={onClose}></Modal.CloseButton>
        <Modal.Header>{i18n.t('CREATE_USER')}</Modal.Header>
        <Modal.Body>
          <VStack space={2}>
            <InputFieldController
              name="firstName"
              control={control}
              label={i18n.t('FIRST_NAME')}
              placeholder={i18n.t('$PLACEHOLDERS.FIRST_NAME')}
              isRequired={true}
            />
            <InputFieldController
              name="lastName"
              control={control}
              label={i18n.t('LAST_NAME')}
              placeholder={i18n.t('$PLACEHOLDERS.LAST_NAME')}
              isRequired={true}
            />
            <InputFieldController
              name="email"
              control={control}
              label={i18n.t('EMAIL')}
              placeholder={i18n.t('$PLACEHOLDERS.EMAIL')}
              isRequired={true}
            />
            <RadioFieldController
              control={control}
              name="gener"
              label={i18n.t('GENDER')}
              isRequired={true}
              options={[
                { label: i18n.t('MALE'), value: 'male' },
                { label: i18n.t('FEMALE'), value: 'female' },
              ]}
            />

            <CheckboxFieldController
              control={control}
              name="hobbies"
              label={i18n.t('HOBBIES')}
              isRequired={true}
              options={[
                { label: i18n.t('COMPUTER'), value: 'computer' },
                { label: i18n.t('BOOK'), value: 'book' },
              ]}
            />

            <SelectFieldController
              name="major"
              control={control}
              label={i18n.t('MAJOR')}
              placeholder={i18n.t('$PLACEHOLDERS.MAJOR')}
              isRequired={true}
              options={[
                { label: i18n.t('COMPUTER'), value: 'computer' },
                { label: i18n.t('BOOK'), value: 'book' },
              ]}
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
