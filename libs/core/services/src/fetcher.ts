import { QueryFunctionContext } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import { useTokenState } from '@mylong.frontend/core-auth';

const client = new GraphQLClient(process.env['NX_APP_GRAPHQL_URL'] || '', {
  headers: () => ({
    GraphiQL_Authorization: process.env['NX_APP_GRAPHQL_TOKEN'] || '',
    'AUTH-TOKEN': useTokenState.getState().token || '',
  }),
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
