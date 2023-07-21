import { Flex, IFlexProps } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableHeaderProps extends IFlexProps {}

export const TableHeader: FunctionComponent<ITableHeaderProps> = (props) => {
  return <Flex {...props} />;
};
