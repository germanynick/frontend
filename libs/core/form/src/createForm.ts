import { create } from 'zustand';
import { IUseFormProps, useForm } from './useForm';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface IGlobalForm<T extends FieldValues> {
  form?: UseFormReturn<T>;
  setForm: (form: UseFormReturn<T>) => void;
}

export const createForm = <T extends FieldValues = FieldValues>(props: IUseFormProps<T>) => {
  const useGlobalForm = create<IGlobalForm<T>>((set) => ({ form: undefined, setForm: (form) => set({ form }) }));

  return () => {
    const newForm = useForm(props);
    const baseForm = useGlobalForm((state) => state.form);

    const setForm = useGlobalForm((state) => state.setForm);

    const finalForm = baseForm || newForm;

    if (!baseForm) {
      setForm(finalForm);
    }

    return finalForm;
  };
};
