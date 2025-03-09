# Rest parameters

Problem: You want to declare a function that can accept an arbitrary number of arguments.

Solution: Rest parameters.

Rest parameters are a way to represent an indefinite number of arguments as an array. You can use the `...` syntax to declare a rest parameter. The rest parameter must be the last parameter in the function signature.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
```

In this example, the `sum` function accepts any number of arguments and returns the sum of all the numbers. The `numbers` parameter is a rest parameter that collects all the arguments passed to the function as an array.
