import { debounce } from 'lodash';
import { useCallback } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export interface IScrollToEndProps {
  triggerFn: () => void;
  paddingBottom?: number;
  wait?: number;
}

export const useScrollToEnd = ({ triggerFn, paddingBottom = 20, wait }: IScrollToEndProps) => {
  const debounceTriggerFn = debounce(() => triggerFn(), wait || 1000, { leading: true, trailing: false });

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

      const isBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingBottom;

      if (isBottom) {
        debounceTriggerFn();
      }
    },
    [debounceTriggerFn, paddingBottom]
  );

  return {
    handleScroll,
  };
};
