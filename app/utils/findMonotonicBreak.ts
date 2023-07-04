/**
 * returns -1 if the array is monotonic
 * @param arr
 */
export const findMonotonicBreak = (arr: number[]): number => {
  const lastMonotonic = arr.findIndex((value, index, array) => {
    if (index === array.length - 1) return false;
    return value < array[index + 1];
  });

  return lastMonotonic === -1 ? -1 : lastMonotonic + 1;
};
