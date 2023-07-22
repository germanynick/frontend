import { ReactNode } from 'react';

export interface IRenderCellProps {
  column: IDataColumn;
  columnIndex: number;
  rowData: any;
  rowIndex: number;
}

export interface IRenderHeaderProps {
  column: IDataColumn;
  columnIndex: number;
}

export interface IDataColumn {
  minWidth?: number;
  flexGrow?: number;
  align?: 'flex-start' | 'flex-end' | 'center';
  cell: (props: IRenderCellProps) => ReactNode;
  header: (props: IRenderHeaderProps) => ReactNode;
}
