import { Flex, IFlexProps } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableHeaderProps extends IFlexProps {}

export const TableHeader: FunctionComponent<ITableHeaderProps> = (props) => {
  return <Flex {...props} />;
};

TableHeader.defaultProps = {
  height: '48px',
  minWidth: 'full',
  width: 'full',
  direction: 'row',
  backgroundColor: '#F1FEFF',
  borderBottomWidth: '1px',
  borderColor: 'primary.50',
};
