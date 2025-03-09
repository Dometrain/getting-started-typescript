// Exercise 1: Create function overloads for a function named `getLength` that can take either a string or an array and return their length.

// Question:
function getLength(s: string): number;
function getLength(arr: any[]): number;
function getLength(arg: any): number {
  if (typeof arg === "string" || Array.isArray(arg)) {
    return arg.length;
  }
  throw new Error("Invalid argument");
}

// Test your implementation:
getLength("TypeScript"); // 10
getLength([1, 2, 3, 4, 5]); // 5
