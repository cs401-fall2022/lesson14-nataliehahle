import { describe, expect, test } from '@jest/globals';
import { helloWorld } from '../app';
describe('sum module', function () {
    test('returns the string hello', function () {
        expect(helloWorld()).toBe('Hello World! Welcome to TypeScript');
    });
});
//# sourceMappingURL=test.main.js.map