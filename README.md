# no-flow

"no-flow" is a small library for testing your code.

## Installation

```shell
npm i https://github.com/Palladium02/no-flow.git
```

or

```shell
yarn add https://github.com/Palladium02/no-flow.git
```

## How to use

### Writing a test

```ts
import { test, expect } from 'no-flow';
import myFunction from '../src/myFunction';

test("", () => {
  return expect(
    myFunction()
  ).toBe(
    "some expected output"
  );
});

```

### Running your test(s)

There are two options for running your tests. You either run them manually using
node or ts-node depending on the language you are using. When using that approach
you can place your tests whereever you want in your project.

The second method is to use the no-flow cli that will be installed with 
the no-flow package. For the time being using the cli requires you to place your
test files in a test folder that is located in the projects root.

Like this:
```
my-project/
|-package.json
|-src/
| |-index.ts
|-test/
| |-index.test.ts
```

Then you have only have to add a test command to the scripts field in your 
package.json.

```json
{
  ...
  "scripts": {
    "test": "no-flow"
  }
}
```

### CLI flags

The CLI has two different config flags you can use and maybe have to use.

|flag name|what it means|
|---|---|
| --js |tells no-flow to run your tests as js|
| --ts |tells no-flow to run your tests as ts|

If no flag was provided no-flow will default to --js.
Please note that you have to have ts-node installed to use the --ts flag.