import { Center, ICenterProps, usePropsResolution } from 'native-base';
import { FunctionComponent, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableRowCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
  rowData: any;
  rowIndex: number;
}

export const TableRowCell: FunctionComponent<ITableRowCellProps> = ({
  column,
  columnIndex,
  rowData,
  rowIndex,
  alignItems,
  ...props
}) => {
  const themeProps = usePropsResolution('TableRowCell', props);

  const children = useMemo(() => {
    if (!column.cell) {
      return '';
    }

    return createElement(column.cell, { column, columnIndex, rowData, rowIndex, _text: themeProps._text });
  }, [column, columnIndex, rowData, rowIndex, themeProps._text]);

  return (
    <Center
      width={column.width}
      minWidth={column.minWidth}
      flexGrow={column.flexGrow}
      alignItems={column.align || alignItems}
      _text={themeProps._text}
      {...themeProps}
    >
      {children}
    </Center>
  );
};
