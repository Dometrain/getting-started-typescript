// Exercise: Understanding the `any` type in TypeScript

// 1. Declare a variable with the `any` type and assign it a string value.
let myVariable: any = "Hello, TypeScript!";

// 2. Reassign the variable to a number.
myVariable = 42;

// 3. Reassign the variable to an object with a name property that's set to "TS".
myVariable = { name: "TS" };

// 4. Create a function that accepts a parameter of type `any` and logs its type and value.
function logAnyType(value: any): void {
  console.log(`Type: ${typeof value}, Value: ${value}`);
}

// 5. Call the function with different types of arguments (string, number, object, array).
logAnyType("A string value");
logAnyType(12345);
logAnyType({ key: "value" });
logAnyType([1, 2, 3, 4, 5]);

// 6. Explain why using `any` can be both useful and potentially problematic in TypeScript.
// Using `any` can be useful when you can't determine the type or when you want to allow any type to be assigned.
// However, it can be problematic because it bypasses TypeScript's type checking, leading to potential runtime errors if the type is not what you expect.
