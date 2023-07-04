import { findMonotonicBreak } from '../findMonotonicBreak';

describe('findMonotonicBreak', () => {
  it('finds the monotonic break index', () => {
    expect(findMonotonicBreak([9, 8, 8, 7, 4, 6, 2, 1])).toEqual(5);
  });

  it('returns -1 if no monotonic break is found', () => {
    expect(findMonotonicBreak([9, 8, 8, 7, 6, 6, 2, 1])).toEqual(-1);
  });
});
