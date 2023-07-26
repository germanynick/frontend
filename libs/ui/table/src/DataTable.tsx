import { FunctionComponent, useMemo } from 'react';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import { TableRowCell } from './TableRowCell';
import { IDataColumn } from './interfaces';
import { GestureResponderEvent } from 'react-native';

export interface IDataTableProps {
  data?: any[];
  columns: IDataColumn[];
  onClickRow?: (event: GestureResponderEvent, rowData: any, rowIndex: number) => void;
}

export const DataTable: FunctionComponent<IDataTableProps> = ({ columns, data, onClickRow }) => {
  const width = useMemo(() => columns?.reduce((a, b) => a + (b.minWidth || 0), 0), [columns]);

  return (
    <Table _contentContainerStyle={{ width }}>
      <TableHeader>
        {columns.map((column, columnIndex) => (
          <TableHeaderCell column={column} columnIndex={columnIndex} key={columnIndex} />
        ))}
      </TableHeader>
      <TableBody>
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
    </Table>
  );
};
