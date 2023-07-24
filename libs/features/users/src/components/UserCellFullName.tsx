import { IRenderCellProps } from '@frontend/ui/table';
import { Avatar, Center, HStack, Text } from 'native-base';
import { FunctionComponent } from 'react';

export interface IUserCellFullNameProps extends IRenderCellProps {}

export const UserCellFullName: FunctionComponent<IUserCellFullNameProps> = (props) => {
  return (
    <HStack space={2} width="full" height="full">
      <Center>
        <Avatar size="sm">{props.rowIndex}</Avatar>
      </Center>
      <Center width="full" flex={1}>
        <Text fontWeight="semibold" numberOfLines={1} ellipsizeMode="tail">
          A Hello World Long Long Long Logn Text A
        </Text>
      </Center>
    </HStack>
  );
};
