import { Calculator } from './calculator.ts';

const calculator = new Calculator();

const [, , operation, ...args] = process.argv;

const numbers = args.map(Number);

if (numbers.some(Number.isNaN)) {
  console.error('All arguments must be numbers.');
  process.exit(1);
}

switch (operation) {
  case 'add':
    console.log(calculator.add(...numbers));
    break;

  case 'multiply':
    console.log(calculator.multiply(...numbers));
    break;

  case 'subtract':
    if (numbers.length !== 2) {
      console.error('Subtract requires exactly 2 numbers.');
      process.exit(1);
    }

    console.log(calculator.subtract(numbers[0], numbers[1]));
    break;

  case 'divide':
    if (numbers.length !== 2) {
      console.error('Divide requires exactly 2 numbers.');
      process.exit(1);
    }

    try {
      console.log(calculator.divide(numbers[0], numbers[1]));
    } catch (error) {
      console.error((error as Error).message);
      process.exit(1);
    }

    break;

  default:
    console.log('Usage:');
    console.log('  npm.cmd start add 1 2 3');
    console.log('  npm.cmd start multiply 2 3 4');
    console.log('  npm.cmd start subtract 10 4');
    console.log('  npm.cmd start divide 10 2');
    process.exit(1);
}
