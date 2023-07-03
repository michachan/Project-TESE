export type Product = {
  name: PRODUCT_NAMES;
  releaseYear?: number;
  dimensions: {
    length: number;
    width: number;
  };
  energy: number;
  cost: number;
};

export const enum PRODUCT_NAMES {
  MEGAPACK_2XL = 'MegaPack 2XL',
  MEGAPACK_2 = 'MegaPack 2',
  MEGAPACK = 'MegaPack',
  POWERPACK = 'PowerPack',
  TRANSFORMER = 'Transformer',
}

export const COLOR_MAP: Record<PRODUCT_NAMES, string> = {
  [PRODUCT_NAMES.MEGAPACK_2XL]: '#FF0000',
  [PRODUCT_NAMES.MEGAPACK_2]: '#FFA500',
  [PRODUCT_NAMES.MEGAPACK]: '#FFFF00',
  [PRODUCT_NAMES.POWERPACK]: '#00FF00',
  [PRODUCT_NAMES.TRANSFORMER]: '#0000FF',
};

/**
 * Dimensions in feet
 * Energy in MWh
 * Cost in USD
 */
export const PRODUCTS: Record<PRODUCT_NAMES, Product> = {
  [PRODUCT_NAMES.MEGAPACK_2XL]: {
    name: PRODUCT_NAMES.MEGAPACK_2XL,
    releaseYear: 2022,
    dimensions: {
      length: 40,
      width: 10,
    },
    energy: 4,
    cost: 120_000,
  },
  [PRODUCT_NAMES.MEGAPACK_2]: {
    name: PRODUCT_NAMES.MEGAPACK_2,
    releaseYear: 2021,
    dimensions: {
      length: 30,
      width: 10,
    },
    energy: 3,
    cost: 80_000,
  },
  [PRODUCT_NAMES.MEGAPACK]: {
    name: PRODUCT_NAMES.MEGAPACK,
    releaseYear: 2005,
    dimensions: {
      length: 30,
      width: 10,
    },
    energy: 2,
    cost: 50_000,
  },
  [PRODUCT_NAMES.POWERPACK]: {
    name: PRODUCT_NAMES.POWERPACK,
    releaseYear: 2000,
    dimensions: {
      length: 10,
      width: 10,
    },
    energy: 1,
    cost: 20_000,
  },
  [PRODUCT_NAMES.TRANSFORMER]: {
    name: PRODUCT_NAMES.TRANSFORMER,
    dimensions: {
      length: 10,
      width: 10,
    },
    energy: -0.25,
    cost: 10_000,
  },
};

/**
 * The number of transformers required for every X batteries
 */
export const BATTERY_TO_TRANSFORMER_RATIO = 4;
