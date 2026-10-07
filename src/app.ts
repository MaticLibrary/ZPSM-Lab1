import { Calculator } from './calculator.ts';

const calculator = new Calculator();

const [, , operation, ...args] = process.argv;

if (!operation) {
  console.error('Missing operation.');
  console.error('Use: add, multiply, subtract or divide.');
  process.exit(1);
}

const numbers = args.map(Number);

if (numbers.length === 0 || numbers.some(Number.isNaN)) {
  console.error('You must provide valid numbers.');
  process.exit(1);
}

try {
  switch (operation) {
    case 'add':
      console.log(calculator.add(...numbers));
      break;

    case 'multiply':
      console.log(calculator.multiply(...numbers));
      break;

    case 'subtract':
      if (numbers.length !== 2) {
        throw new Error('Subtract requires exactly 2 numbers.');
      }

      console.log(calculator.subtract(numbers[0], numbers[1]));
      break;

    case 'divide':
      if (numbers.length !== 2) {
        throw new Error('Divide requires exactly 2 numbers.');
      }

      console.log(calculator.divide(numbers[0], numbers[1]));
      break;

    default:
      throw new Error(
        `Unknown operation: ${operation}`,
      );
  }
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}
