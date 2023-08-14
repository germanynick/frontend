import { createForm } from '@frontend/core/form';
import * as yup from 'yup';

export const LocationCreateSchema = yup.object({
  name: yup.string().trim().required(),
  clientId: yup.string().required(),
  phone: yup.string().trim().nullable(),

  address: yup
    .object({
      street: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      country: yup.string().required(),
      zipcode: yup.string().required(),
    })
    .nullable(),
});

export type ILocationCreateSchema = yup.InferType<typeof LocationCreateSchema>;

export const useLocationCreateForm = createForm({ schema: LocationCreateSchema });
