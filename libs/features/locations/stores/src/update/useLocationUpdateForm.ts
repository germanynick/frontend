import { createForm } from '@frontend/core/form';
import * as yup from 'yup';

export const LocationUpdateSchema = yup.object({
  id: yup.string().trim().required(),
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

export type ILocationUpdateSchema = yup.InferType<typeof LocationUpdateSchema>;

export const useLocationUpdateForm = createForm({ schema: LocationUpdateSchema });
