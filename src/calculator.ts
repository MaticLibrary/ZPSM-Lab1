import { sum } from './sum.ts';

export class Calculator {
  add(...values: number[]): number {
    return sum(...values);
  }

  multiply(...values: number[]): number {
    return values.reduce((total, value) => total * value, 1);
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }

    return a / b;
  }
}
