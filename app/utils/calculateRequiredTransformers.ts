import {
  BATTERY_TO_TRANSFORMER_RATIO,
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

export const calculateRequiredTransformers = (
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

  return Math.floor(totalBatteries / BATTERY_TO_TRANSFORMER_RATIO);
};
