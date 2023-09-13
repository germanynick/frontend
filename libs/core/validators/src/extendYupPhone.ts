import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js';

declare module 'yup' {
  export interface StringSchema {
    /**
     * Check for phone number validity.
     *
     * @param {String} [errorMessage=DEFAULT_MESSAGE] The error message to return if the validation fails.
     * @param {String} [countryCode=US] The country code to check against.
     */
    phone(errorMessage?: string, countryCode?: CountryCode): StringSchema;
  }
}

const YUP_PHONE_METHOD = 'phone';
const DEFAULT_MESSAGE = 'Invalid Phone';

function yupPhone(errorMessage: string = DEFAULT_MESSAGE, countryCode: CountryCode = 'US') {
  // @ts-ignore
  return this.test(YUP_PHONE_METHOD, errorMessage, (value: string) => {
    return isValidPhoneNumber(value, countryCode);
  });
}

export const extendYupPhone = (yup: any) => {
  yup.addMethod(yup.string, YUP_PHONE_METHOD, yupPhone);
};
