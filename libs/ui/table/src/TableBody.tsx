import { IScrollViewProps, ScrollView, usePropsResolution } from 'native-base';
import { FC, MutableRefObject } from 'react';

export interface ITableBodyProps extends IScrollViewProps {
  scrollRef?: MutableRefObject<any>;
}

export const TableBody: FC<ITableBodyProps> = ({ scrollRef, ...props }) => {
  const themeProps = usePropsResolution('TableBody', props);

  return <ScrollView ref={scrollRef} {...themeProps} />;
};
