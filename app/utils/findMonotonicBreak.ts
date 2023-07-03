/**
 * returns -1 if the array is monotonic
 * @param arr
 */
export const findMonotonicBreak = (arr: number[]): number => {
  return arr.findIndex((value, index, array) => {
    if (index === array.length - 1) return false;
    return value < array[index + 1];
  });
};
