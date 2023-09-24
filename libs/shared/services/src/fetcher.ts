import { QueryFunctionContext } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import { storage } from '@mylong.frontend/core-storage';

const client = new GraphQLClient(process.env['NX_APP_GRAPHQL_URL'] || '', {
  headers: async () => {
    const token = await storage.getItem('AUTH-TOKEN');

    return {
      GraphiQL_Authorization: process.env['NX_APP_GRAPHQL_TOKEN'] || '',
      'AUTH-TOKEN': token || '',
    };
  },
});

export const fetcher =
  <TData, TVariables extends { [key: string]: any }>(
    document: string,
    variables?: TVariables,
    requestHeaders?: RequestInit['headers'],
  ) =>
  (_context?: QueryFunctionContext) => {
    return client.request<TData>({
      document,
      variables,
      requestHeaders,
    });
  };
