// eslint-disable-next-line no-restricted-imports
import { Config, FormApi, SubmissionErrors, createForm } from 'final-form';
import { create } from 'zustand';
import * as yup from '@mylong.frontend/core-validators';

type ISubmitFunction = <TFormValues>(
  values?: TFormValues,
  formApi?: FormApi<TFormValues>,
) => Promise<SubmissionErrors> | void;

interface IGlobalFormState<TFormValues> {
  submitFunc: ISubmitFunction;
  setSubmitFunc: (submitFunc: ISubmitFunction) => void;
  formApi: FormApi<TFormValues>;
}

export const createGlobalForm = <TFormValues extends object>(
  schema?: yup.ObjectSchema<TFormValues>,
  config?: Partial<Config<TFormValues>>,
) => {
  const useGlobalForm = create<IGlobalFormState<TFormValues>>((set, get) => ({
    submitFunc: () => Promise.resolve(undefined),
    setSubmitFunc: (submitFunc) => set({ submitFunc }),
    formApi: createForm<TFormValues>({
      validate: schema ? yup.yupResolver(schema) : undefined,
      onSubmit: (values, formApi) => {
        const { submitFunc } = get();

        if (typeof submitFunc === 'function') {
          return submitFunc(values, formApi);
        }

        return Promise.resolve(undefined);
      },
      ...config,
    }),
  }));

  return () => {
    const formApi = useGlobalForm((state) => state.formApi);
    const setSubmitFunc = useGlobalForm((state) => state.setSubmitFunc);

    const handleSubmit = (submitFunc: ISubmitFunction) => () => {
      setSubmitFunc(submitFunc);
      formApi.submit();
    };

    return { ...formApi, handleSubmit };
  };
};
