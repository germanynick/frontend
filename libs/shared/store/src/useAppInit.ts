import { useAppInitQuery } from '@mylong.frontend/shared-services';
import { useTokenState } from './useTokenState';

export const useAppInit = () => {
  const token = useTokenState((state) => state.token);
  return useAppInitQuery({ token } as any);
};
