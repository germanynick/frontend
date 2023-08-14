import { IRenderCellProps } from '@frontend/ui/table';
import { IconButton, ThreeDotsIcon } from 'native-base';
import { FC } from 'react';

export interface IUserCellActionsProps extends IRenderCellProps {}

export const UserCellActions: FC<IUserCellActionsProps> = (props) => {
  return (
    <IconButton
      size="sm"
      icon={<ThreeDotsIcon />}
      style={{ transform: 'rotate(90deg)' }}
      borderRadius="full"
      onPress={console.log}
    ></IconButton>
  );
};
