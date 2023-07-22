import { Center, ICenterProps, Text } from 'native-base';
import { FunctionComponent, createElement } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableRowCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
  rowData: any;
  rowIndex: number;
}

export const TableRowCell: FunctionComponent<ITableRowCellProps> = ({ column, columnIndex, rowData, rowIndex, _text, flexGrow, alignItems, ...props }) => {
  return (
    <Center minWidth={column.minWidth} flexGrow={column.flexGrow || flexGrow} alignItems={column.align || alignItems} {...props}>
      <Text {..._text}>{createElement(column.cell, { column, columnIndex, rowData, rowIndex })}</Text>
    </Center>
  );
};

TableRowCell.defaultProps = {
  paddingX: '8px',
  flexGrow: 1,
  flexBasis: 0,
  alignItems: 'flex-start',
  _text: { color: '#333335', fontSize: 'md', fontWeight: 'normal' },
};
