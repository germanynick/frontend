import { Center, ICenterProps, Text, usePropsResolution } from 'native-base';
import { FunctionComponent, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableHeaderCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
}

export const TableHeaderCell: FunctionComponent<ITableHeaderCellProps> = ({ column, columnIndex, ...props }) => {
  const { _text, alignItems, ...themeProps } = usePropsResolution('TableHeaderCell', props);

  const children = useMemo(() => {
    if (!column?.header) {
      return <Text {..._text}>{column.title}</Text>;
    }

    return createElement(column.header, { column, columnIndex, _text });
  }, [column, columnIndex, _text]);

  return (
    <Center
      minWidth={column.minWidth}
      width={column.width}
      flexGrow={column.flexGrow}
      alignItems={column.align || alignItems}
      {...themeProps}
    >
      {children}
    </Center>
  );
};
