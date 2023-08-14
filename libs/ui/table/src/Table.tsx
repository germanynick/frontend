import { FC } from 'react';
import { IScrollViewProps, ScrollView, usePropsResolution } from 'native-base';

export interface ITableProps extends IScrollViewProps {}

export const Table: FC<ITableProps> = ({ ...props }) => {
  const themeProps = usePropsResolution('Table', props);

  return <ScrollView {...themeProps} />;
};
