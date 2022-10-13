import {describe, expect, test} from '@jest/globals';
import {helloWorld} from '../main';

describe('sum module', () => {
  test('returns the string hello world welcome to typescript', () => {
    expect(helloWorld()).toBe('Hello World! Welcome to TypeScript');
  });
});
