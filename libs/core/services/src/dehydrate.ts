import { DehydrateOptions, QueryClient, dehydrate as baseDehydrate } from '@tanstack/react-query';

export const dehydrate = (queryClient: QueryClient, options?: DehydrateOptions) => {
  return JSON.parse(JSON.stringify(baseDehydrate(queryClient, options)));
};
