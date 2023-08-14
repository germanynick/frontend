import { create } from 'zustand';

export interface ILocationUpdateState {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const useLocationUpdateState = create<ILocationUpdateState>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
