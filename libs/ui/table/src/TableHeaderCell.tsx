import { Center, ICenterProps, Text, Tooltip, usePropsResolution } from 'native-base';
import { FC, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableHeaderCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
}

export const TableHeaderCell: FC<ITableHeaderCellProps> = ({ column, columnIndex, ...props }) => {
  const { _text, alignItems, ...themeProps } = usePropsResolution('TableHeaderCell', props);

  const children = useMemo(() => {
    if (!column?.header) {
      return (
        <Tooltip label={column.title || ''}>
          <Text {..._text}>{column.title}</Text>
        </Tooltip>
      );
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
