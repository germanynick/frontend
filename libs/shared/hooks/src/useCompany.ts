import { useAppInit } from './useAppInit';

export const useCompany = () => {
  const { data } = useAppInit();

  return data?.appInit?.company;
};
