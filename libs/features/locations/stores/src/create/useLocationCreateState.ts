import { create } from 'zustand';

export interface ILocationCreateState {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const useLocationCreateState = create<ILocationCreateState>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
