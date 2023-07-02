import {
  BATTERY_TO_TRANSFORMER_RATIO,
  PRODUCT_NAMES,
  PRODUCTS,
} from './constants';

export const calculateRequiredTransformers = (
  data: Record<PRODUCT_NAMES, number> | Record<string, unknown>
) => {
  const batteryCounts = Object.entries(data).filter(
    (
      entry
    ): entry is [Exclude<PRODUCT_NAMES, PRODUCT_NAMES.TRANSFORMER>, number] => {
      const [name, value] = entry;

      return (
        name in PRODUCTS &&
        typeof value === 'number' &&
        name !== PRODUCT_NAMES.TRANSFORMER &&
        value > 0
      );
    }
  );

  const totalBatteries = batteryCounts.reduce((acc: number, currentValue) => {
    return (acc += currentValue[1]);
  }, 0);

  return Math.floor(totalBatteries % BATTERY_TO_TRANSFORMER_RATIO);
};
