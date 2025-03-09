// Exercise: Namespaces

// Question 1: Create a namespace called `MathOperations` that contains a function `add`
// which takes two numbers and returns their sum.

namespace MathOperations {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

// Question 2: Extend the `MathOperations` namespace to include a function `subtract`
// which takes two numbers and returns their difference.

namespace MathOperations {
  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

// Question 3: Use the `MathOperations` namespace to add and subtract two numbers,
// and log the results to the console.

const sum = MathOperations.add(10, 5);
const difference = MathOperations.subtract(10, 5);
console.log(`Sum: ${sum}, Difference: ${difference}`);
