import { IPressableProps, Pressable, usePropsResolution } from 'native-base';
import { FC } from 'react';

export interface ITableRowProps extends IPressableProps {}

export const TableRow: FC<ITableRowProps> = (props) => {
  const themeProps = usePropsResolution('TableRow', props);
  return <Pressable {...themeProps} />;
};
