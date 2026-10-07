import { CalculatorLodash } from './calculator-lodash.ts';

const calculator = new CalculatorLodash([
  2,
  'seven',
  4,
  null,
  8,
]);

console.log(calculator.add());      // 14
console.log(calculator.subtract()); // -10
console.log(calculator.multiply()); // 64
console.log(calculator.divide());   // 0.0625
