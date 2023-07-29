import { Center, ICenterProps, usePropsResolution, Tooltip, Text } from 'native-base';
import { FunctionComponent, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';
import { get } from 'lodash';

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
  ...props
}) => {
  const { _text, alignItems, ...themeProps } = usePropsResolution('TableRowCell', props);

  const children = useMemo(() => {
    if (!column.cell) {
      const content = column.dataKey ? get(rowData, column.dataKey) : '';

      return (
        <Tooltip label={content}>
          <Text {..._text}>{content}</Text>
        </Tooltip>
      );
    }

    return createElement(column.cell, { column, columnIndex, rowData, rowIndex, _text });
  }, [column, columnIndex, rowData, rowIndex, _text]);

  return (
    <Center
      width={column.width}
      minWidth={column.minWidth}
      flexGrow={column.flexGrow}
      alignItems={column.align || alignItems}
      {...themeProps}
    >
      {children}
    </Center>
  );
};
