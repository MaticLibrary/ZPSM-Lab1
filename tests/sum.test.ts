import { describe, expect, test } from 'vitest';
import { sum } from '../src/sum.ts';

describe('sum', () => {
  test('sumuje liczby', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  test('działa dla wielu liczb', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  test('zwraca 0 dla pustych argumentów', () => {
    expect(sum()).toBe(0);
  });

  test('działa dla liczb ujemnych', () => {
    expect(sum(-1, -2, -3)).toBe(-6);
  });

  test('działa dla liczb mieszanych', () => {
    expect(sum(-5, 10, -2, 7)).toBe(10);
  });
});
