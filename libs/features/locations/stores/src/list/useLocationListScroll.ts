import { useLocationListQuery } from './useLocationListQuery';
import { useScrollToEnd } from '@frontend/core/hooks';

export const useLocationListScroll = () => {
  const { fetchNextPage } = useLocationListQuery();

  const handleScroll = useScrollToEnd({ triggerFn: fetchNextPage });

  return handleScroll;
};
