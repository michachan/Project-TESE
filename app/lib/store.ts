import { create } from 'zustand';

import { PRODUCT_NAMES } from '../utils/constants';

type State = { [key in PRODUCT_NAMES]: number };

type Action = {
  updateCart: (product: PRODUCT_NAMES, quantity: number) => void;
};

export type Store = State & Action;

export const useStore = create<Store>((set) => ({
  [PRODUCT_NAMES.MEGAPACK_2XL]: 0,
  [PRODUCT_NAMES.MEGAPACK_2]: 0,
  [PRODUCT_NAMES.MEGAPACK]: 0,
  [PRODUCT_NAMES.POWERPACK]: 0,
  [PRODUCT_NAMES.TRANSFORMER]: 0,
  updateCart: (product, quantity) => {
    set(() => ({ [product]: quantity }));
  },
}));
