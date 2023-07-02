import { Store } from '../lib/store';
import {
  BATTERY_TO_TRANSFORMER_RATIO,
  Product,
  PRODUCT_NAMES,
  PRODUCTS,
} from './constants';

export const parseItemCounts = (data: Store) => {
  const itemCounts = Object.entries(data).filter(
    (entry): entry is [PRODUCT_NAMES, number] => {
      return entry[0] in PRODUCTS;
    }
  );

  return itemCounts;
};

export const calculateMWhAndCost = (data: Store) => {
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

export const calculateTotalBatteries = (data: Store) => {
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

export const calculateRequiredTransformers = (data: Store) => {
  return Math.floor(
    calculateTotalBatteries(data) / BATTERY_TO_TRANSFORMER_RATIO
  );
};

export const calculateRequiredSpace = (product: Product, itemCount: number) => {
  return {
    length: product.dimensions.length * Math.ceil(itemCount / 10),
    width: product.dimensions.width * Math.min(itemCount, 10),
  };
};

export const formatRequiredSpace = (
  requiredSpace: ReturnType<typeof calculateRequiredSpace>,
  excludeUnits = false
) => {
  return `${requiredSpace.length.toLocaleString()}${
    excludeUnits ? '' : 'ft'
  } x ${requiredSpace.width.toLocaleString()}${excludeUnits ? '' : 'ft'}`;
};

export const calculateSiteArea = (state: Store) => {
  const items = parseItemCounts(state);

  const spaceForAllProducts = items.map((item) => {
    const [name, count] = item;
    const product = PRODUCTS[name];
    return calculateRequiredSpace(product, count);
  });

  const widthMax = Math.max(...spaceForAllProducts.map((item) => item.width));
  const lengthSum = spaceForAllProducts.reduce(
    (acc, currentValue) => (acc += currentValue.length),
    0
  );

  return { length: lengthSum, width: widthMax };
};
