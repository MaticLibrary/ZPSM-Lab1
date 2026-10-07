import { Calculator } from '../src/calculator.ts';

const calculator = new Calculator([
  2,
  'seven',
  4,
  null,
  8,
]);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
