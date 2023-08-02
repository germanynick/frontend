import { client } from './client';

export const fetcher = <TData, TVariables extends { [key: string]: any }>(
  document: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers']
) => {
  return async (): Promise<TData> =>
    client.request({
      document,
      variables,
      requestHeaders,
    });
};
