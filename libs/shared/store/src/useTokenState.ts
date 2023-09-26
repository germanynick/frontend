import { create } from '@mylong.frontend/core-zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from '@mylong.frontend/core-storage';

export interface ITokenState {
  token?: string | null;
  setToken: (token?: string | null) => void;
}

export const useTokenState = create<ITokenState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => {
        return set({ token });
      },
    }),
    {
      name: 'AUTH-TOKEN',
      storage: createJSONStorage(() => storage),
    },
  ),
);
