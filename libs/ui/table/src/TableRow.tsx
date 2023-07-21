import { Flex, IFlexProps } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableRowProps extends IFlexProps {}

export const TableRow: FunctionComponent<ITableRowProps> = (props) => {
  return <Flex {...props} />;
};
