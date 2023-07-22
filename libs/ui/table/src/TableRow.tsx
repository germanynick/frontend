import { IPressableProps, Pressable } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableRowProps extends IPressableProps {}

export const TableRow: FunctionComponent<ITableRowProps> = (props) => {
  return <Pressable {...props} />;
};

TableRow.defaultProps = {
  minWidth: 'full',
  width: 'full',
  flexDirection: 'row',
  height: '48px',
  _hover: {
    backgroundColor: '#F8F8F8',
  },
};
