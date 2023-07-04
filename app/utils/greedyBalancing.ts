import { Store } from '../lib/store';
import { COLOR_MAP, Product, PRODUCTS } from './constants';
import { findMonotonicBreak } from './findMonotonicBreak';
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
  const numOfBuckets = Math.floor(siteWidth / standardWidth);

  const items = parseItemCounts(state).map(([key, value]) => ({
    ...PRODUCTS[key],
    count: value,
  }));

  items.sort((a, b) => b.dimensions.length - a.dimensions.length);

  const bucketSums = Array.from({ length: numOfBuckets }, () => 0);
  const buckets: Product[][] = Array.from({ length: numOfBuckets }, () => []);

  const findMinBucketIndex = () =>
    bucketSums.findIndex((value) => value === Math.min(...bucketSums));

  items.forEach((item) => {
    const length = item.dimensions.length;
    let minBucketIndex = findMinBucketIndex();
    let monotonicBreak = findMonotonicBreak(bucketSums);
    let offset = 0;

    for (let i = 0; i < item.count; i++) {
      const bucketIndex = minBucketIndex + offset;
      const minBucket = buckets[bucketIndex];

      offset += 1;

      minBucket.push(item);
      bucketSums[bucketIndex] += length;

      // Rows are theoretically sorted from longest to shortest, left to right. Once we reach the end, we calculate
      // the next max and start from there
      // If we are at the last index of the row, find next min and change offset to 0
      if (bucketIndex === numOfBuckets - 1 || bucketIndex >= monotonicBreak) {
        monotonicBreak =
          monotonicBreak === -1 ? findMonotonicBreak(bucketSums) : -1;
        minBucketIndex = findMinBucketIndex();
        offset = 0;
      }
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

        rollingLength += item.dimensions.length / 10;
      });

      return acc;
    },
    []
  );

  return { maxLength: Math.max(...bucketSums), flattenedPlots };
};
