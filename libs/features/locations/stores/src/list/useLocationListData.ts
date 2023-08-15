import { useLocationListQuery } from './useLocationListQuery';

export const useLocationListData = () => {
  const query = useLocationListQuery();

  const data = query.data?.pages.flatMap((page) => page.employerListLocations?.nodes);

  return data;
};
