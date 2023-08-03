import { QueryFunctionContext } from '@tanstack/react-query';
import { client } from './client';

export const fetcher =
  <TData, TVariables extends { [key: string]: any }>(
    document: string,
    variables?: TVariables,
    requestHeaders?: RequestInit['headers']
  ) =>
  (_context?: QueryFunctionContext) => {
    console.log(client);
    return client.request<TData>({
      document,
      variables,
      requestHeaders,
    });
  };
