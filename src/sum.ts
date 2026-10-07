export function sum(...values: unknown[]): number {
  let total = 0;

  values.forEach((value, index) => {
    const position = index + 1;

    if (typeof value !== 'number' || !Number.isFinite(value)) {
      let displayedValue: string;

      if (typeof value === 'string') {
        displayedValue = JSON.stringify(value);
      } else {
        displayedValue = String(value);
      }

      console.log(
        `Argument ${position} is not a number: ${displayedValue}`
      );

      return;
    }

    total += value;
  });

  return total;
}
