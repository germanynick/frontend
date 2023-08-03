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

  documents: path.resolve(__dirname, './src/generated/gql/**/*.gql'),

  generates: {
    [path.resolve(__dirname, './src/generated/types.ts')]: {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        skipDocumentsValidation: true,
      },
    },
    [path.resolve(__dirname, './src/generated/hooks.ts')]: {
      preset: 'import-types',
      presetConfig: { typesPath: './types' },
      plugins: ['typescript-react-query'],
      config: {
        preResolveTypes: true,
        skipDocumentsValidation: true,
        exposeDocument: false,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        exposeFetcher: true,
        addInfiniteQuery: true,

        fetcher: {
          func: '../fetcher#fetcher',
          isReactHook: false,
        },
      },
    },
    [path.resolve(__dirname, './src/generated/sdk.ts')]: {
      preset: 'import-types',
      presetConfig: { typesPath: './types' },
      plugins: ['typescript-graphql-request'],
      config: {
        preResolveTypes: true,
        skipDocumentsValidation: true,
        noExport: true,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './hooks',
      },
    },
  },
};

export default config;
