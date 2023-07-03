import { Store } from '../lib/store';
import { COLOR_MAP, Product, PRODUCTS } from './constants';
import { parseItemCounts } from './productConversions';

/**
 * Places batteries in a greedy way, starting from the left bucket to the right
 * @param data
 * @param standardWidth
 * @param siteWidth
 */
export const greedyBalancing = (
  state: Store,
  standardWidth: number,
  siteWidth: number
) => {
  const numOfBuckets = Math.ceil(siteWidth / standardWidth);
  const items = parseItemCounts(state).map(([key, value]) => ({
    ...PRODUCTS[key],
    count: value,
  }));

  items.sort((a, b) => b.dimensions.length - a.dimensions.length);

  const bucketSums = Array.from({ length: numOfBuckets }, () => 0);
  const buckets: Product[][] = Array.from({ length: numOfBuckets }, () => []);

  items.forEach((item) => {
    const length = item.dimensions.length;
    const minBucketIndex = bucketSums.findIndex(
      (value) => value === Math.min(...bucketSums)
    );

    for (let i = 0; i < item.count; i++) {
      const bucketIndex = (minBucketIndex + i) % numOfBuckets;
      const minBucket = buckets[bucketIndex];
      minBucket.push(item);
      bucketSums[bucketIndex] += length;
    }
  });

  const flattenedPlots = buckets.reduce(
    (
      acc: (Product & { plot: { x: number; y: number; color: string } })[],
      bucket,
      index
    ) => {
      let rollingLength = 0;

      bucket.forEach((item) => {
        acc.push({
          ...item,
          plot: { x: index, y: rollingLength, color: COLOR_MAP[item.name] },
        });

        rollingLength += item.dimensions.length;
      });

      return acc;
    },
    []
  );

  return { maxLength: Math.max(...bucketSums), flattenedPlots };
};
