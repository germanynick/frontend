// eslint-disable-next-line no-restricted-imports
import * as yup from 'yup';
import extendYupPassword from 'yup-password';
import { extendYupPhone } from './extendYupPhone';

extendYupPassword(yup);
extendYupPhone(yup);
export * from './yupResolver';
export { yup };
