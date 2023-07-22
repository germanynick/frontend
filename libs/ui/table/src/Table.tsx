import { FunctionComponent } from 'react';
import { IScrollViewProps, ScrollView } from 'native-base';

export interface ITableProps extends IScrollViewProps {}

export const Table: FunctionComponent<ITableProps> = ({ _contentContainerStyle, width, ...props }) => {
  return <ScrollView _contentContainerStyle={{ ..._contentContainerStyle, width }} {...props} />;
};

Table.defaultProps = {
  minWidth: 'full',
  width: 'full',
  horizontal: true,
  borderWidth: '1px',
  borderRadius: '8px',
  borderColor: '#A7D6D9',
  backgroundColor: '#ffffff',
  _contentContainerStyle: { minWidth: 'full', style: { flexDirection: 'column' } },
};
