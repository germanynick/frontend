import { Box, IBoxProps } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableRowCellProps extends IBoxProps {}

export const TableRowCell: FunctionComponent<ITableRowCellProps> = (props) => {
  return <Box {...props} />;
};
