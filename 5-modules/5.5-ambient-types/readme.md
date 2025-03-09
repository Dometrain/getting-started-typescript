# Ambient Types

Problem: You're consuming a library that doesn't provide TypeScript types.

Solution: Declare an ambient type. An ambient type is unique in two ways:

1. First, it's global. You don't have to import it. That's why it's called ambient. The word ambient is defined as "an aspect of the environment that completely surrounds you". An ambient type is automatically in scope in all files. So be careful, ambient types are powerful, and rarely necessary.
2. Second, an ambient type is merely a type definition for untyped code, such as an old library that's written in plain JavaScript. So there's no implementation in an ambient type. It's just a type definition. So there's a risk the ambient type may not actually match the implementation.

Here's an example of an ambient type:

```ts
// Declare the types for the `myLibrary` object using ambient types.
declare const myLibrary: {
  version: string;
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};
```

In this example, we `declare` an ambient type for a library that has a `version` property and four functions: `add`, `subtract`, `multiply`, and `divide`. The functions take two numbers and return a number.

Now you can use the `myLibrary` object in your code without TypeScript complaining about the missing types. You get autocomplete support and type checking for the `myLibrary` object.

```ts
// Use the `myLibrary` object in the code below.
console.log(myLibrary.version);
console.log(myLibrary.add(1, 2));
```

Note that the filename ends in `d.ts`. This is a convention for TypeScript declaration files. The d.ts extension tells TypeScript that this file contains only type definitions.

So, don't put plain types or executable code in a d.ts file.

In fact, if you do, it breaks the global nature of the d.ts file. Uncomment the plain type and function in my-library.d.ts below, then check `example.ts` to see the error.

In summary, d.ts files that you create should only contain global type definitions.
