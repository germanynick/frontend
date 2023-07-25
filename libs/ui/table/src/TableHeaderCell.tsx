import { Center, ICenterProps, Text } from 'native-base';
import { FunctionComponent, createElement, useMemo } from 'react';
import { IDataColumn } from './interfaces';

export interface ITableHeaderCellProps extends ICenterProps {
  column: IDataColumn;
  columnIndex: number;
}

export const TableHeaderCell: FunctionComponent<ITableHeaderCellProps> = ({ column, columnIndex, _text, alignItems, ...props }) => {
  const children = useMemo(() => {
    if (!column?.header) {
      return <Text {..._text}>{column.title}</Text>;
    }

    return createElement(column.header, { column, columnIndex, _text });
  }, [column, columnIndex, _text]);

  return (
    <Center minWidth={column.minWidth} width={column.width} flexGrow={column.flexGrow} alignItems={column.align || alignItems} _text={_text} {...props}>
      {children}
    </Center>
  );
};

TableHeaderCell.defaultProps = {
  paddingX: '8px',
  flexBasis: 0,
  alignItems: 'flex-start',
  _text: { color: 'primary.600', fontSize: 'md', fontWeight: 'semibold' },
};
