# Function overloads

Function overloads are a way to define multiple function signatures for the same function name. This allows you to have multiple ways to call a function, depending on the arguments you pass to it.

Here's an example:

```typescript
// Function overload signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Function implementation
function add(a: any, b: any): any {
  return a + b;
}

// Usage examples
const sum = add(10, 20); // 30
const concatenatedString = add("Hello, ", "world!"); // "Hello, world!"
```

The overloads must be declared above the implementation. The implementation must be a single function that is compatible with **all** the overload signatures.

Generally, avoid function overloads if you can. They can make your code harder to read and maintain.

You might consider using a union type instead, but that isn't a great fit because it doesn't enforce the same type for both arguments:

```typescript
// Could use union, but doesn't enforce matching types for a and b
function add(a: number | string, b: number | string) {
  //   return a + b; // doesn't work
  return (a as any) + b; // works, but ugly
}
```

When you create an overload, consider that two or more separate well-named functions might be better.

```ts
// Consider separate well-named functions instead of overloading
function addNumbers(a: number, b: number) {
  return a + b;
}

function concatenate(a: string, b: string) {
  return a + b;
}
```
