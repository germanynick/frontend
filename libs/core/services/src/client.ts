import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env['APP_GRAPHQL_API'] as string, {
  headers: {
    GraphiQL_Authorization: process.env['APP_GRAPHQL_TOKEN'] as string,
  },
});
