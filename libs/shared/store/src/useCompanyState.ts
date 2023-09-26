import { useAppInitQuery } from '@mylong.frontend/shared-services';

export const useCompanyState = () => {
  const { data, ...rest } = useAppInitQuery();

  return {
    ...rest,
    data: data?.appInit?.company,
  };
};
