import filter from 'lodash/filter.js';
import reduce from 'lodash/reduce.js';

export class CalculatorLodash {
  private readonly values: number[];
  private readonly rejected: unknown[];

  constructor(input: unknown[]) {
    this.values = filter(
      input,
      (value): value is number =>
        typeof value === 'number' && Number.isFinite(value)
    );

    this.rejected = filter(
      input,
      (value): boolean =>
        !(typeof value === 'number' && Number.isFinite(value))
    );

    for (const value of this.rejected) {
      console.log(`Rejected value: ${String(value)}`);
    }
  }

  add(): number {
    return reduce(
      this.values,
      (total, value) => total + value,
      0
    );
  }

  subtract(): number {
    if (this.values.length === 0) {
      return 0;
    }

    return reduce(
      this.values.slice(1),
      (total, value) => total - value,
      this.values[0]
    );
  }

  multiply(): number {
    if (this.values.length === 0) {
      return 0;
    }

    return reduce(
      this.values,
      (total, value) => total * value,
      1
    );
  }

  divide(): number {
    if (this.values.length === 0) {
      return 0;
    }

    return reduce(
      this.values.slice(1),
      (total, value) => {
        if (value === 0) {
          throw new Error('Cannot divide by zero');
        }

        return total / value;
      },
      this.values[0]
    );
  }
}
