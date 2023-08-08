import { create } from 'zustand';

export interface IUserCreateState {
  initialValues?: any;
  setInitialValues: (values?: any) => void;
}

export const useUserCreateState = create<IUserCreateState>((set) => ({
  initialValues: undefined,
  setInitialValues: (values) => set({ initialValues: values }),
}));

export const useUserCreateStore = () => {
  const setInitialValues = useUserCreateState((state) => state.setInitialValues);
  const showModal = useUserCreateState((state) => !!state.initialValues);

  const handleClickCreate = (values: any) => {
    setInitialValues(values);
  };

  const handleCancelCreate = () => {
    setInitialValues(undefined);
  };

  const handleSubmitCreate = (values: any) => {
    console.log(values);
    console.log(values);
  };

  return {
    showModal,
    handleClickCreate,
    handleCancelCreate,
    handleSubmitCreate,
  };
};
