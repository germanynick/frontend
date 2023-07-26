import { IPressableProps, Pressable, usePropsResolution } from 'native-base';
import { FunctionComponent } from 'react';

export interface ITableRowProps extends IPressableProps {}

export const TableRow: FunctionComponent<ITableRowProps> = (props) => {
  const themeProps = usePropsResolution('TableRow', props);
  return <Pressable {...themeProps} />;
};
