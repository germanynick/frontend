import { FunctionComponent } from 'react';
import { IScrollViewProps, ScrollView, Text } from 'native-base';

export interface ITableProps extends IScrollViewProps {}

export const Table: FunctionComponent<ITableProps> = (props) => {
  return <ScrollView {...props} />;
};
