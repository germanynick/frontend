import { IScrollViewProps, ScrollView } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableBodyProps extends IScrollViewProps {}

export const TableBody: FunctionComponent<ITableBodyProps> = (props) => {
  return <ScrollView {...props} />;
};
