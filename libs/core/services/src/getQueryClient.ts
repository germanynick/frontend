import { QueryClient, QueryClientConfig } from '@tanstack/react-query';
import { useMemo } from 'react';
import { defaultsDeep } from 'lodash';

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
    mutations: {},
  },
};

export const getQueryClient = (config?: QueryClientConfig) => {
  const baseConfig = defaultsDeep(QUERY_CLIENT_CONFIG, config);

  if (typeof window === 'undefined') {
    return new QueryClient(baseConfig);
  }

  return useMemo(() => new QueryClient(baseConfig), []);
};
