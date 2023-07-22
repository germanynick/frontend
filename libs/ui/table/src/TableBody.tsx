import { IScrollViewProps, ScrollView } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableBodyProps extends IScrollViewProps {}

export const TableBody: FunctionComponent<ITableBodyProps> = ({ width, ...props }) => {
  return <ScrollView {...props} />;
};

TableBody.defaultProps = {
  minWidth: 'full',
  width: 'full',
  height: 'full',
  _contentContainerStyle: { minWidth: 'full', width: 'full', flexDirection: 'column' },
};
