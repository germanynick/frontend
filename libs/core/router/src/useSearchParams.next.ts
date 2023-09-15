import { useSearchParams as useNextSearchParams } from 'next/navigation';
import qs from 'qs';

export const useSearchParams = () => {
  const searchParams = useNextSearchParams();

  return qs.parse(searchParams.toString());
};
