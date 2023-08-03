import { GraphQLClient } from 'graphql-request';
import { CONFIGS } from '@frontend/core/config';

export const client = new GraphQLClient(CONFIGS.graphql.endpointUrl, {
  headers: {
    GraphiQL_Authorization: CONFIGS.graphql.endpointToken,
  },
});
