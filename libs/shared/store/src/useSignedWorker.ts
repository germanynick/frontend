import { useAppInit } from './useAppInit';

export const useSignedWorker = () => {
  const { data } = useAppInit();

  return data?.appInit?.worker;
};
