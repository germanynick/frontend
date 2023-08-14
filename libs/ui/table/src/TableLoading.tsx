import { FC } from 'react';
import { Spinner, ISpinnerProps, usePropsResolution, HStack, Text, IStackProps, ITextProps, Center } from 'native-base';

export interface ITableLoadingProps extends IStackProps {
  loading?: boolean;
  loadingText?: string;

  _spinner?: ISpinnerProps;
  _text?: ITextProps;
}

export const TableLoading: FC<ITableLoadingProps> = ({ loading, loadingText, ...props }) => {
  const { _text, _spinner, ...themeProps } = usePropsResolution('TableLoading', props);

  if (!loading) {
    return null;
  }

  return (
    <HStack {...themeProps}>
      {loading && <Spinner {..._spinner} />}
      {loadingText && (
        <Center>
          <Text {..._text}>{loadingText}</Text>
        </Center>
      )}
    </HStack>
  );
};
