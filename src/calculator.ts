export class Calculator {
  private readonly values: number[];
  private readonly rejected: unknown[];

  constructor(input: unknown[]) {
    this.values = input.filter(
      (value): value is number =>
        typeof value === 'number' && Number.isFinite(value)
    );

    this.rejected = input.filter(
      (value) =>
        typeof value !== 'number' || !Number.isFinite(value)
    );

    this.rejected.forEach((value) => {
      console.log(`Rejected value: ${String(value)}`);
    });
  }

  add(): number {
    return this.values.reduce(
      (total, value) => total + value,
      0
    );
  }

  subtract(): number {
    if (this.values.length === 0) {
      return 0;
    }

    return this.values.slice(1).reduce(
      (result, value) => result - value,
      this.values[0]
    );
  }

  multiply(): number {
    return this.values.reduce(
      (result, value) => result * value,
      1
    );
  }

  divide(): number {
    if (this.values.length === 0) {
      return 0;
    }

    if (this.values.slice(1).some((value) => value === 0)) {
      return 0;
    }

    return this.values.slice(1).reduce(
      (result, value) => result / value,
      this.values[0]
    );
  }
}
