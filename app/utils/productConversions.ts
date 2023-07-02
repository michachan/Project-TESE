import {
  BATTERY_TO_TRANSFORMER_RATIO,
  Product,
  PRODUCT_NAMES,
  PRODUCTS,
} from './constants';

export const parseItemCounts = (
  data: Record<PRODUCT_NAMES, number> | Record<string, unknown>
) => {
  const itemCounts = Object.entries(data).filter(
    (entry): entry is [PRODUCT_NAMES, number] => {
      return entry[0] in PRODUCTS;
    }
  );

  return itemCounts;
};

export const calculateMWhAndCost = (
  data: Record<PRODUCT_NAMES, number> | Record<string, unknown>
) => {
  const itemCounts = parseItemCounts(data);

  return itemCounts.reduce(
    (acc, currentValue) => {
      const [itemName, itemCount] = currentValue;
      const item = PRODUCTS[itemName];

      return [
        (acc[0] += item.energy * itemCount),
        (acc[1] += item.cost * itemCount),
      ];
    },
    [0, 0]
  );
};

export const calculateTotalBatteries = (
  data: Record<PRODUCT_NAMES, number> | Record<string, unknown>
) => {
  const batteryCount = parseItemCounts(data).filter(
    (
      entry
    ): entry is [Exclude<PRODUCT_NAMES, PRODUCT_NAMES.TRANSFORMER>, number] =>
      entry[0] !== PRODUCT_NAMES.TRANSFORMER
  );

  const totalBatteries = batteryCount.reduce(
    (acc: number, currentValue) => (acc += currentValue[1]),
    0
  );

  return totalBatteries;
};

export const calculateRequiredTransformers = (
  data: Record<PRODUCT_NAMES, number> | Record<string, unknown>
) => {
  return Math.floor(
    calculateTotalBatteries(data) / BATTERY_TO_TRANSFORMER_RATIO
  );
};

export const calculateRequiredSpace = (product: Product, itemCount: number) => {
  return `${product.dimensions.length * Math.ceil(itemCount / 10)}ft x ${
    product.dimensions.width * Math.min(itemCount, 10)
  }ft`;
};
