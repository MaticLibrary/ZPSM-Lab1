import { describe, expect, test } from 'vitest';
import { multiply } from '../src/multiply.ts';

describe('multiply', () => {
  test('mnoży liczby', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('działa dla jednej liczby', () => {
    expect(multiply(7)).toBe(7);
  });

  test('dla pustej listy zwraca 1', () => {
    expect(multiply()).toBe(1);
  });

  test('działa z zerem', () => {
    expect(multiply(5, 0, 10)).toBe(0);
  });

  test('działa z liczbami ujemnymi', () => {
    expect(multiply(-2, 3, -4)).toBe(24);
  });
});
