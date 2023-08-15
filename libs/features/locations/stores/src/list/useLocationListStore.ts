import { useLocationListFiltersForm } from './useLocationListFiltersForm';
import { useLocationListScroll } from './useLocationListScroll';
import { useLocationListData } from './useLocationListData';

export const useLocationListStore = () => {
  const filters = useLocationListFiltersForm();
  const data = useLocationListData();
  const handleScroll = useLocationListScroll();

  return {
    filters,
    data,
    handleScroll,
  };
};
