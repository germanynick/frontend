import * as localforage from 'localforage';

export const storage = {
  getItem: (name: string) => localforage.getItem<string>(name),
  setItem: (name: string, value: any) => localforage.setItem(name, value),
  removeItem: (name: string) => localforage.removeItem(name),
};
