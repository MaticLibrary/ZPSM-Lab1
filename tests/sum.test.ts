import { describe, expect, test } from 'vitest';
import { sum } from '../src/sum.ts';


describe('sum', () => {
  test('dodaje liczby', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  test('działa dla pustej listy', () => {
    expect(sum()).toBe(0);
  });

  test('dodaje liczby ujemne', () => {
    expect(sum(-1, -2, 3)).toBe(0);
  });
});
