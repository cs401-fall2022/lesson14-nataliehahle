# TypeScript Lab

## Build

To build this TypeScript project run the following command: `npm run compile`. This will build and compile
the directory

```
$ npm run compile

> lesson14-nataliehahle@1.0.0 compile
> tsc

$ ls build
__tests__  app.js     app.js.map
```

## Test

Testing the framework with Jest is easy when running the following command: `npm run test`. This will run
the tests.

```
$ npm run test

lesson14-nataliehahle@1.0.0 test
> npm run compile && npm run unit


> lesson14-nataliehahle@1.0.0 compile
> tsc


> lesson14-nataliehahle@1.0.0 unit
> jest

  console.log
    Hello World! Welcome to TypeScript

      at Object.<anonymous> (app.js:31:9)

 PASS  __tests__/test.app.ts
  sum module
    ✓ returns the string hello (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.71 s, estimated 1 s
Ran all test suites.
```
