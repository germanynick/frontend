import i18n from '@frontend/core/i18n';
import { AddIcon, Button, Center, HStack, Input, SearchIcon } from 'native-base';
import { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';

export interface IUserListHeaderProps {
  onClickCreate: (event: GestureResponderEvent) => void;
  onSearchChange: (text: string) => void;
}

export const UserListHeader: FunctionComponent<IUserListHeaderProps> = ({ onClickCreate, onSearchChange }) => {
  return (
    <HStack direction={{ base: 'column', sm: 'row' }} space={2}>
      <Center>
        <Button width="full" startIcon={<AddIcon />} onPress={onClickCreate}>
          {i18n.t('CREATE_USER')}
        </Button>
      </Center>
      <Center marginLeft="auto">
        <Input
          width="full"
          InputRightElement={<SearchIcon />}
          placeholder={i18n.t('$PLACEHOLDERS.SEARCH')}
          onChangeText={onSearchChange}
        />
      </Center>
    </HStack>
  );
};
