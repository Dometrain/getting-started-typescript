# Typing arrays and tuples

TypeScript supports typing arrays using two approaches:

```ts
// Array type
const numbers: number[] = [1, 2, 3];

// Generic type
const numbers: Array<number> = [1, 2, 3];
```

These two syntaxes are equivalent. They both declare an array of numbers. The 2nd syntax uses the generic `Array` type. Generics are a more advanced topic, but in short you can read this as "an array of numbers".

An array can also contain a mix of types, which is called a tuple. Here's an example:

```ts
const tuple: [number, string] = [1, "hello"];
```

This declares a tuple with a number and a string. The order of the types is important. If you try to swap the types, TypeScript will error.

The tuple can also be declared using the `Array` type:

```ts
const tuple: Array<number | string> = [1, "hello"];
```

However, these two syntaxes aren't equivalent. This syntax doesn't specify the order of the types. It just says the array can contain numbers or strings. The pipe delimited list is called a union.

Arrays can also be declared with a fixed length. Here's an example:

```ts
const fixedLength: [number, number, number] = [1, 2, 3];
```

This declares an array with a fixed length of 3 numbers. If you try to add more or less than 3 numbers, TypeScript will error.
