import { create } from '@mylong.frontend/core-zustand';

export interface ILayoutState {
  isSidebarOpen: boolean;
  toggleSidebar: (isSidebarOpen?: boolean) => void;
}

export const useLayoutState = create<ILayoutState>((set, get) => ({
  isSidebarOpen: false,
  toggleSidebar: (isSidebarOpen?: boolean) =>
    set({ isSidebarOpen: typeof isSidebarOpen === 'boolean' ? isSidebarOpen : !get().isSidebarOpen }),
}));
