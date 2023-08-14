import { Flex, IFlexProps, usePropsResolution } from 'native-base';
import { FC } from 'react';

export interface ITableHeaderProps extends IFlexProps {}

export const TableHeader: FC<ITableHeaderProps> = (props) => {
  const themeProps = usePropsResolution('TableHeader', props);
  return <Flex {...themeProps} />;
};
