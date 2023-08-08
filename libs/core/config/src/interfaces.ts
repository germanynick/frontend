export interface IGraphQLConfig {
  endpointUrl: string;
  endpointToken: string;
}

export interface IConfig {
  env: 'production' | 'development' | 'staging';
  graphql: IGraphQLConfig;
}
