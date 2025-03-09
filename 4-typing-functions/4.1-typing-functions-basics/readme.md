# Section Intro

So far we've been working with mostly primitive types. But what about functions? In this section we'll type function arguments, declare optional arguments, overload functions, use rest params to accept an unknown number of arguments, and work with the `this` keyword in functions.

# Typing functions

In TypeScript, you can declare the types of function parameters and return values.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

In the example above, the `add` function takes two parameters `a` and `b`, both of type `number`, and returns a value of type `number`.

The return type is optional and can be inferred by TypeScript:

```typescript
function add(a: number, b: number) {
  return a + b;
}
```

This still returns a number because TypeScript can infer the return type based on the return statement. TypeScript knows that a and b are numbers, so the result of adding them together is also a number. However, it's often helpful to explicitly declare the return type for better readability and maintainability.

Some functions don't return anything. In that case, you can declare the return type as `void`:

```typescript
function log(message: string): void {
  console.log(message);
}
```

You can also declare the type of a function variable:

```typescript
const multiply: (a: number, b: number) => number = function (a, b) {
  return a * b;
};
```

In the example above, the `multiply` variable is declared as a function that takes two parameters of type `number` and returns a value of type `number`. The function assigned to `multiply` matches this signature.

When declaring the type of a function variable, you can also use arrow function syntax:

```typescript
const divide: (a: number, b: number) => number = (a, b) => {
  return a / b;
};
```

Structural typing applies to functions too. This is valid.

```ts
let add = (a: number, b: number): number => a + b;
let add2 = (c: number, d: number): number => c + d;
add = add2;

// Invalid. Different number of args.
let add3 = (a: number, b: number, c: number): number => a + b + c;
// add = add3; // Error

// If the last parameter is optional, it's still valid.
let add4 = (a: number, b: number, c?: number): number => a + b + (c || 0);
add = add4;
```
