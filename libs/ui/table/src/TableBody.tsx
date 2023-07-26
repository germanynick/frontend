import { IScrollViewProps, ScrollView, usePropsResolution } from 'native-base';
import { FunctionComponent, MutableRefObject } from 'react';

export interface ITableBodyProps extends IScrollViewProps {
  scrollRef?: MutableRefObject<any>;
}

export const TableBody: FunctionComponent<ITableBodyProps> = ({ scrollRef, ...props }) => {
  const themeProps = usePropsResolution('TableBody', props);

  return <ScrollView ref={scrollRef} {...themeProps} />;
};
