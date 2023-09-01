import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env['NX_APP_GRAPHQL_URL'] as string]: {
        headers: {
          GraphiQL_Authorization: process.env['NX_APP_GRAPHQL_TOKEN'] || '',
        },
      },
    },
  ],

  generates: {
    [path.resolve(__dirname, './src/generated/schema.graphql')]: {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
