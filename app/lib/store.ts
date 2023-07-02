import { create } from 'zustand';

export const store = (set: any) => {
  return {
    tasks: [{ title: 'testtask', state: 'planned' }],
  };
};

export const useStore = create(store);
