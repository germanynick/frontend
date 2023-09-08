import { useTokenState } from '@mylong.frontend/core-auth';
import { useAppInitQuery } from '@mylong.frontend/core-services';

export const useAppInit = () => {
  const token = useTokenState((state) => state.token);
  return useAppInitQuery({ token } as any);
};
