import { FunctionComponent, useMemo, useCallback } from 'react';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import { TableRowCell } from './TableRowCell';
import { IDataColumn } from './interfaces';
import { GestureResponderEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { TableLoading } from './TableLoading';
import { TableEmpty } from './TableEmpty';
import { Box } from 'native-base';

export interface IDataTableProps {
  data?: any[];
  columns: IDataColumn[];
  loading?: boolean;
  loadingText?: string;
  emptyText?: string;
  onClickRow?: (event: GestureResponderEvent, rowData: any, rowIndex: number) => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onScrollToEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export const DataTable: FunctionComponent<IDataTableProps> = ({
  columns,
  data,
  loading,
  loadingText,
  emptyText,
  onClickRow,
  onScroll,
  onScrollToEnd,
}) => {
  const width = useMemo(() => columns?.reduce((a, b) => a + (b.minWidth || 0), 0), [columns]);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (typeof onScroll === 'function') {
        onScroll(event);
      }

      if (typeof onScrollToEnd === 'function') {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

        const isBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isBottom) {
          onScrollToEnd(event);
        }
      }
    },
    [onScroll, onScrollToEnd]
  );

  return (
    <Box position="relative" height="full">
      <Table _contentContainerStyle={{ width }}>
        <TableHeader>
          {columns.map((column, columnIndex) => (
            <TableHeaderCell column={column} columnIndex={columnIndex} key={columnIndex} />
          ))}
        </TableHeader>
        <TableBody onScroll={handleScroll}>
          {data?.map((rowData, rowIndex) => (
            <TableRow key={rowIndex} onPress={onClickRow ? (e) => onClickRow(e, rowData, rowIndex) : undefined}>
              {columns?.map((column, columnIndex) => (
                <TableRowCell
                  key={columnIndex}
                  rowData={rowData}
                  rowIndex={rowIndex}
                  column={column}
                  columnIndex={columnIndex}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
        {data?.length === 0 && !loading && <TableEmpty emptyText={emptyText} />}
      </Table>
      <TableLoading loading={loading} loadingText={loadingText || 'Loading'} />
    </Box>
  );
};
