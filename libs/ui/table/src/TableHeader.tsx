import { Flex, IFlexProps, usePropsResolution } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableHeaderProps extends IFlexProps {}

export const TableHeader: FunctionComponent<ITableHeaderProps> = (props) => {
  const themeProps = usePropsResolution('TableHeader', props);
  return <Flex {...themeProps} />;
};
