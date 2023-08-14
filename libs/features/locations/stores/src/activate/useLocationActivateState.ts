import { create } from 'zustand';

export interface ILocationActivateState {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const useLocationActivateState = create<ILocationActivateState>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
