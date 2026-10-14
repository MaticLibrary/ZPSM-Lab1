function twice(value: number): number {
  return value * 2;
}

const validNumber = 2;

console.log(twice(validNumber));

const numbers: number[] = [12, 5, 8, 20, 3, 10];

const minimum = Math.min(...numbers);
const maximum = Math.max(...numbers);
const average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

console.log("Minimum:", minimum);
console.log("Maximum:", maximum);
console.log("Average:", average);