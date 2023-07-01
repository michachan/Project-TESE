type Device = {
  name: DEVICE_NAMES;
  releaseYear: string;
  dimensions: {
    length: number;
    width: number;
  };
  energy: number;
  cost: number;
};

export const enum DEVICE_NAMES {
  MEGAPACK_2XL = 'MegaPack 2XL',
  MEGAPACK_2 = 'MegaPack 2',
  MEGAPACK = 'MegaPack',
  POWERPACK = 'PowerPack',
  TRANSFORMER = 'Transformer',
}

/**
 * Dimensions in feet
 * Energy in MWh
 * Cost in USD
 */
export const DEVICES: Record<DEVICE_NAMES, Device> = {
  [DEVICE_NAMES.MEGAPACK_2XL]: {
    name: DEVICE_NAMES.MEGAPACK_2XL,
    releaseYear: '2022',
    dimensions: {
      length: 40,
      width: 10,
    },
    energy: 4,
    cost: 120_000,
  },
  [DEVICE_NAMES.MEGAPACK_2]: {
    name: DEVICE_NAMES.MEGAPACK_2,
    releaseYear: '2021',
    dimensions: {
      length: 30,
      width: 10,
    },
    energy: 3,
    cost: 80_000,
  },
  [DEVICE_NAMES.MEGAPACK]: {
    name: DEVICE_NAMES.MEGAPACK,
    releaseYear: '2005',
    dimensions: {
      length: 30,
      width: 10,
    },
    energy: 2,
    cost: 50_000,
  },
  [DEVICE_NAMES.POWERPACK]: {
    name: DEVICE_NAMES.POWERPACK,
    releaseYear: '2000',
    dimensions: {
      length: 10,
      width: 10,
    },
    energy: 1,
    cost: 20_000,
  },
  [DEVICE_NAMES.TRANSFORMER]: {
    name: DEVICE_NAMES.TRANSFORMER,
    releaseYear: '-',
    dimensions: {
      length: 10,
      width: 10,
    },
    energy: -0.25,
    cost: 10_000,
  },
};
