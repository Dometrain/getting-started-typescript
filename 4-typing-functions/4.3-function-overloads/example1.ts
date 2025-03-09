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

console.log(sum);
console.log(concatenatedString);
