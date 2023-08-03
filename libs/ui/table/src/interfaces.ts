import { ReactNode } from 'react';
import { ITextProps } from 'native-base';

export interface IRenderCellProps {
  column: IDataColumn;
  columnIndex: number;
  rowData: any;
  rowIndex: number;
  _text?: Partial<ITextProps>;
}

export interface IRenderHeaderProps {
  column: IDataColumn;
  columnIndex: number;
  _text?: Partial<ITextProps>;
}

export interface IDataColumn {
  title?: string;
  dataKey?: string;
  width?: number;
  minWidth?: number;
  flexGrow?: number;
  fixed?: 'left' | 'right';
  align?: 'flex-start' | 'flex-end' | 'center';
  cell?: (props: IRenderCellProps) => ReactNode;
  header?: (props: IRenderHeaderProps) => ReactNode;
}
