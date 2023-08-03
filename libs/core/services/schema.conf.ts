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

  generates: {
    [path.resolve(__dirname, './src/generated/schema.graphql')]: {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
