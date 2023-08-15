import { useScrollToEnd } from '@frontend/core/hooks';
import { JobSearchQueryVariables, useInfiniteJobSearchQuery } from '@frontend/core/services';
import { debounce } from 'lodash';
import { useMemo } from 'react';
import { create } from 'zustand';

export interface IUserListState {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const useUserListState = create<IUserListState>((set) => ({
  keyword: '',
  setKeyword: (keyword: string) => set({ keyword }),
}));

export const useUserListStore = () => {
  const { keyword, setKeyword } = useUserListState();

  const variables = useMemo(
    () => (keyword ? ({ filter: { keyword } } as JobSearchQueryVariables) : undefined),
    [keyword]
  );

  const { data, isLoading, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteJobSearchQuery(
    'offset',
    variables,
    {
      getNextPageParam: (lastPage, allPages) => {
        const total = allPages.length * 20;

        return (total <= (lastPage.jobSearch?.totalCount || 0) && { offset: total }) || null;
      },
    }
  );

  const items = useMemo(() => data?.pages?.flatMap((item) => item.jobSearch?.jobs), [data?.pages]);
  const loading = useMemo(
    () => isLoading || isFetching || isFetchingNextPage,
    [isLoading, isFetching, isFetchingNextPage]
  );

  const { handleScroll } = useScrollToEnd({ triggerFn: fetchNextPage });
  const handleKeywordChange = debounce(setKeyword, 500);

  return {
    items,
    loading,
    handleKeywordChange,
    handleScroll,
  };
};
