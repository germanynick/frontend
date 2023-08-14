import { createForm } from '@frontend/core/form';
import * as yup from 'yup';

export const LocationDeactivateSchema = yup.object({
  id: yup.string().trim().required(),
  reason: yup.string().nullable(),
});

export type ILocationDeactivateSchema = yup.InferType<typeof LocationDeactivateSchema>;

export const useLocationDeactivateForm = createForm({ schema: LocationDeactivateSchema });
