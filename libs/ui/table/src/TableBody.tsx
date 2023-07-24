import { IScrollViewProps, ScrollView } from 'native-base';
import { FunctionComponent, MutableRefObject } from 'react';

export interface ITableBodyProps extends IScrollViewProps {
  scrollRef?: MutableRefObject<any>;
}

export const TableBody: FunctionComponent<ITableBodyProps> = ({ scrollRef, width, ...props }) => {
  return <ScrollView ref={scrollRef} {...props} />;
};

TableBody.defaultProps = {
  minWidth: 'full',
  width: 'full',
  height: 'full',
  _contentContainerStyle: { minWidth: 'full', width: 'full', flexDirection: 'column' },
};
