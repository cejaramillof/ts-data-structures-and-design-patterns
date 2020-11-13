import { performance } from 'perf_hooks';

import insertionSort from './insertionSort';

it('insertionSort', () => {
  const source = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
  const t0 = performance.now();
  const result = insertionSort(source);
  const t1 = performance.now();
  console.log(`insertionSort took  ${(t1 - t0).toFixed(4)}ms`);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
