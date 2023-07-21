import { Box, IBoxProps } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableHeaderCellProps extends IBoxProps {}

export const TableHeaderCell: FunctionComponent<ITableHeaderCellProps> = (
  props
) => {
  return <Box {...props} />;
};
