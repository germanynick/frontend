import { Center, ICenterProps, Text, usePropsResolution } from 'native-base';
import { FunctionComponent, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableHeaderCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
}

export const TableHeaderCell: FunctionComponent<ITableHeaderCellProps> = ({
  column,
  columnIndex,
  alignItems,
  ...props
}) => {
  const themeProps = usePropsResolution('TableHeaderCell', props);

  const children = useMemo(() => {
    if (!column?.header) {
      return <Text {...themeProps._text}>{column.title}</Text>;
    }

    return createElement(column.header, { column, columnIndex, _text: themeProps._text });
  }, [column, columnIndex, themeProps]);

  return (
    <Center
      minWidth={column.minWidth}
      width={column.width}
      flexGrow={column.flexGrow}
      alignItems={column.align || alignItems}
      _text={themeProps._text}
      {...themeProps}
    >
      {children}
    </Center>
  );
};
