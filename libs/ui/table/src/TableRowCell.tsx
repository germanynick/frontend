import { Center, ICenterProps } from 'native-base';
import { FunctionComponent, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableRowCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
  rowData: any;
  rowIndex: number;
}

export const TableRowCell: FunctionComponent<ITableRowCellProps> = ({ column, columnIndex, rowData, rowIndex, _text, alignItems, ...props }) => {
  const children = useMemo(() => {
    if (!column.cell) {
      return '';
    }

    return createElement(column.cell, { column, columnIndex, rowData, rowIndex, _text });
  }, [column, columnIndex, rowData, rowIndex, _text]);

  return (
    <Center width={column.width} minWidth={column.minWidth} flexGrow={column.flexGrow} alignItems={column.align || alignItems} _text={_text} {...props}>
      {children}
    </Center>
  );
};

TableRowCell.defaultProps = {
  paddingX: '8px',
  flexBasis: 0,
  alignItems: 'flex-start',
  _text: { color: '#333335', fontSize: 'md', fontWeight: 'normal', numberOfLines: 1 },
};
