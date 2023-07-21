import { FunctionComponent } from 'react';
import { Table } from './Table';

export interface IDataTableProps {}

export const DataTable: FunctionComponent<IDataTableProps> = () => {
  return <Table />;
};
