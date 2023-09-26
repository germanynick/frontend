import { Href } from '@mylong.frontend/core-router';
import { create } from '@mylong.frontend/core-zustand';
import { ComponentType, useEffect } from 'react';

export interface IBreadcrumbItem {
  icon?: ComponentType;
  title?: string;
  meta?: string;
  path?: Href;
}

export interface IBreadcrumbState {
  items: IBreadcrumbItem[];
  setItems: (items: IBreadcrumbItem[]) => void;
}

export const useBreadcrumbState = create<IBreadcrumbState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));

export const useBreadcrumbTitle = () => {
  const title = useBreadcrumbState(
    (state) =>
      state.items
        ?.map((item) => item.title)
        .filter(Boolean)
        .join(' - '),
  );

  return title;
};

export const useBreadcrumbMeta = () => {
  const meta = useBreadcrumbState(
    (state) =>
      state.items
        ?.map((item) => item.meta)
        .filter(Boolean)
        .join('.\n'),
  );

  return meta;
};

export const useBreadcrumbInit = (items: IBreadcrumbItem[]) => {
  const setItems = useBreadcrumbState((state) => state.setItems);

  useEffect(() => {
    setItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return items;
};
