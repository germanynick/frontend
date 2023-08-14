import { create } from 'zustand';

export interface ILocationDeactivateState {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const useLocationDeactivateState = create<ILocationDeactivateState>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
