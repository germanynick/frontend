import { Center, ICenterProps, Text } from 'native-base';
import { FunctionComponent, createElement } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableHeaderCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
}

export const TableHeaderCell: FunctionComponent<ITableHeaderCellProps> = ({ column, columnIndex, _text, flexGrow, alignItems, ...props }) => {
  return (
    <Center minWidth={column.minWidth} flexGrow={column.flexGrow || flexGrow} alignItems={column.align || alignItems} {...props}>
      <Text {..._text}>{column?.header && createElement(column.header, { column, columnIndex })}</Text>
    </Center>
  );
};

TableHeaderCell.defaultProps = {
  paddingX: '8px',
  flexGrow: 1,
  flexBasis: 0,
  alignItems: 'flex-start',
  _text: { color: '#1E2F97', fontSize: 'md', fontWeight: 'semibold' },
};
