import { EmployerListLocationsQueryVariables, useInfiniteEmployerListLocationsQuery } from '@frontend/core/services';
import { useLocationListFiltersForm } from './useLocationListFiltersForm';
import { useDebounce } from 'ahooks';

export const useLocationListQuery = () => {
  const form = useLocationListFiltersForm();

  const variables = useDebounce(
    { keyword: form.getValues('keyword'), clientId: form.getValues('clientId') } as EmployerListLocationsQueryVariables,
    { wait: 500 }
  );

  return useInfiniteEmployerListLocationsQuery('after', variables, {
    getNextPageParam: (lastPage) => {
      const pageInfo = lastPage?.employerListLocations?.pageInfo;

      return pageInfo?.hasNextPage ? { after: pageInfo?.endCursor } : null;
    },
  });
};
