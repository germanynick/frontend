import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NX_APP_GRAPHQL_API as string]: {
        headers: {
          GraphiQL_Authorization: process.env.NX_APP_GRAPHQL_TOKEN as string,
        },
      },
    },
  ],

  documents: path.resolve(__dirname, './src/generated/gql/**/*.gql'),

  generates: {
    [path.resolve(__dirname, './src/generated/sdk.ts')]: {
      plugins: ['typescript', 'typescript-graphql-request', 'typescript-operations'],
      config: {
        omitOperationSuffix: false,
        preResolveTypes: true,
        skipDocumentsValidation: true,
      },
    },
  },
};

export default config;
