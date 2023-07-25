import { FunctionComponent } from 'react';
import i18n from '@frontend/core/i18n';
import { GestureResponderEvent } from 'react-native';
import { Modal, HStack, Center, Button, useBreakpointValue } from 'native-base';

export interface IUserCreateModalProps {
  isOpen: boolean;
  onClose: (event: GestureResponderEvent) => void;
  onSubmit: (formData: any) => void;
}

export const UserCreateModal: FunctionComponent<IUserCreateModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const size = useBreakpointValue({ base: 'full', xl: 'lg' });

  return (
    <Modal isOpen={isOpen} size={size}>
      <Modal.Content>
        <Modal.CloseButton onPress={onClose}></Modal.CloseButton>
        <Modal.Header>{i18n.t('CREATE_USER')}</Modal.Header>
        <Modal.Body>AAA BBB CCC DDD EEE FFF GGG</Modal.Body>
        <Modal.Footer>
          <HStack space={2} width="full">
            <Center flexGrow={1} flexBasis={0}>
              <Button width="full" variant="outline" onPress={onClose}>
                {i18n.t('CANCEL')}
              </Button>
            </Center>
            <Center flexGrow={1} flexBasis={0}>
              <Button width="full" onPress={onSubmit}>
                {i18n.t('CREATE')}
              </Button>
            </Center>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
