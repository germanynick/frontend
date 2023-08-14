import { createForm } from '@frontend/core/form';
import * as yup from 'yup';

export const LocationActivateSchema = yup.object({
  id: yup.string().trim().required(),
  reason: yup.string().nullable(),
});

export type ILocationActivateSchema = yup.InferType<typeof LocationActivateSchema>;

export const useLocationActivateForm = createForm({ schema: LocationActivateSchema });
