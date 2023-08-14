import { FC } from 'react';
import { usePropsResolution, HStack, Text, IStackProps, ITextProps, Center } from 'native-base';

export interface ITableEmptyProps extends IStackProps {
  emptyText?: string;
  _text?: ITextProps;
}

export const TableEmpty: FC<ITableEmptyProps> = ({ emptyText, ...props }) => {
  const { _text, ...themeProps } = usePropsResolution('TableEmpty', props);

  return (
    <HStack {...themeProps}>
      {emptyText && (
        <Center>
          <Text {..._text}>{emptyText}</Text>
        </Center>
      )}
    </HStack>
  );
};

TableEmpty.defaultProps = {
  emptyText: 'No Data',
};
