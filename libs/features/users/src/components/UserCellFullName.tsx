import { IRenderCellProps } from '@frontend/ui/table';
import { Avatar, Center, HStack, Text } from 'native-base';
import { FunctionComponent } from 'react';

export interface IUserCellFullNameProps extends IRenderCellProps {}

export const UserCellFullName: FunctionComponent<IUserCellFullNameProps> = ({ rowData }) => {
  const fullName = [rowData.firstName, rowData.lastName].join(' ');

  return (
    <HStack space={2} width="full" height="full">
      <Center>
        <Avatar size="sm" source={{ uri: rowData.avatar }}>
          {fullName}
        </Avatar>
      </Center>
      <Center width="full" flex={1} alignItems="flex-start">
        <Text fontWeight="semibold" numberOfLines={1} ellipsizeMode="tail">
          {fullName}
        </Text>
      </Center>
    </HStack>
  );
};
