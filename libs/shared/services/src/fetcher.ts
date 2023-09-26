import { QueryFunctionContext } from '@tanstack/react-query';
// import { GraphQLClient } from 'graphql-request';

// const client = new GraphQLClient(process.env['NX_APP_GRAPHQL_URL'] || '', {
//   headers: () => {
//     return {
//       GraphiQL_Authorization: process.env['NX_APP_GRAPHQL_TOKEN'] || '',
//       'AUTH-TOKEN': '',
//     };
//   },
// });

export const fetcher =
  <TData, TVariables extends { [key: string]: any }>(
    query: string,
    variables?: TVariables,
    requestHeaders?: RequestInit['headers'],
  ) =>
  async (_context?: QueryFunctionContext) => {
    const res = await fetch(process.env['NX_APP_GRAPHQL_URL'] || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...requestHeaders,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Fetcher: Error');
    }

    return json.data as TData;

    // return client.request<TData>({
    //   document,
    //   variables,
    //   requestHeaders,
    // });
  };
