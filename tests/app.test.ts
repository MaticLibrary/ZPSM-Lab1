import { describe, expect, test } from 'vitest';
import { execFileSync } from 'node:child_process';

function runApp(...args: string[]): string {
  return execFileSync(
    process.execPath,
    ['--import', 'tsx', 'src/app.ts', ...args],
    {
      encoding: 'utf8',
    },
  ).trim();
}

describe('CLI', () => {
  test('adds numbers', () => {
    expect(runApp('add', '10', '20', '30')).toBe('60');
  });

  test('multiplies numbers', () => {
    expect(runApp('multiply', '2', '3', '4')).toBe('24');
  });

  test('subtracts numbers', () => {
    expect(runApp('subtract', '10', '4')).toBe('6');
  });

  test('divides numbers', () => {
    expect(runApp('divide', '10', '2')).toBe('5');
  });

  test('rejects invalid numbers', () => {
    expect(() => runApp('add', '10', 'abc')).toThrow();
  });

  test('rejects unknown operation', () => {
    expect(() => runApp('power', '2', '3')).toThrow();
  });

  test('rejects division by zero', () => {
    expect(() => runApp('divide', '10', '0')).toThrow();
  });
});
