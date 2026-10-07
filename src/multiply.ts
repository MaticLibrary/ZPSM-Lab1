export function multiply(...values: number[]): number {
  return values.reduce((total, value) => total * value, 1);
}
