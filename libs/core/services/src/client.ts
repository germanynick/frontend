import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env['NEXT_PUBLIC__GRAPHQL_API'] as string, {
  headers: {
    GraphiQL_Authorization: process.env['NEXT_PUBLIC__GRAPHQL_TOKEN'] as string,
  },
});
