import { describe, expect, test } from 'vitest';
import { Calculator } from '../src/calculator.ts';

describe('Calculator', () => {
  const calculator = new Calculator();

  test('adds numbers', () => {
    expect(calculator.add(1, 2, 3)).toBe(6);
  });

  test('multiplies numbers', () => {
    expect(calculator.multiply(2, 3, 4)).toBe(24);
  });

  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('divides numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('throws when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow(
      'Cannot divide by zero',
    );
  });
});
