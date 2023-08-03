import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { CONFIGS } from '../../core/config/src/configs'; // HACKY: MUST DIRECT IMPORT, DONT UPDATE THIS

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [CONFIGS.graphql.endpointUrl]: {
        headers: {
          GraphiQL_Authorization: CONFIGS.graphql.endpointToken,
        },
      },
    },
  ],

  documents: path.resolve(__dirname, './src/documents/**/*.gql'),

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
