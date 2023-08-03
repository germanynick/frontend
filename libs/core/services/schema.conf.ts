import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC__GRAPHQL_API as string]: {
        headers: {
          GraphiQL_Authorization: process.env.NEXT_PUBLIC__GRAPHQL_TOKEN as string,
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
