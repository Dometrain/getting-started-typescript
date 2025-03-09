// Exercise: Typing Functions in TypeScript

// 1. Type this function to accept `num` of type `number` and returns a `boolean`.
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// 2. Type this function to accept two parameters of type `number` and return their product as a `number`.
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 3. Type this function to accept `message` of type `string`, and return `void`.
function logError(message: string): void {
  console.error(message);
}

// 4. Type this function to accept `arr` as an array that contains anything, and returns a `number`.
function getLength(arr: any[]): number {
  return arr.length;
}

// 5. Type this function to accept `name` of type `string` and `age` of type `number`, and return an object with properties `name` and `age`.
function createUser(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

// 6. Type this function expression to accept `width` and `height` of type `number` and return a `number`.
const calculateArea = function (width: number, height: number): number {
  return width * height;
};
