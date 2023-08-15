import { createForm } from '@frontend/core/form';
import * as yup from 'yup';

export const LocationListFiltersSchema = yup.object({
  clientId: yup.string().trim().required(),
  keyword: yup.string().trim().nullable(),
});

export type ILocationListFilters = yup.InferType<typeof LocationListFiltersSchema>;

export const useLocationListFiltersForm = createForm({ schema: LocationListFiltersSchema });
