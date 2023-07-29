import { client } from './client';
import { getSdk } from './generated/sdk';

export const services = getSdk(client);
