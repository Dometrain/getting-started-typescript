// Exercise: Union Types

// 1. Create a function `formatInput` that takes a parameter `input` which can be either a string or a number.
//    If the input is a string, the function should return the string in uppercase.
//    If the input is a number, the function should return the number as a string with a dollar sign prefix.

function formatInput(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return `$${input}`;
  }
}

// 2. Create a type alias `Id` that can be either a string or a number.

type Id = string | number;

// 3. Create a function `printId` that takes a parameter `id` of type `Id` and logs it to the console.

function printId(id: Id): void {
  console.log(`ID: ${id}`);
}

// 4. Create a variable `userId` of type `Id` and assign it a number value. Then call `printId` with `userId`.

let userId: Id = 12345;
printId(userId);

// 5. Change the value of `userId` to a string and call `printId` again.

userId = "abc123";
printId(userId);

// 6. Create a function `getLength` that takes a parameter `value` which can be either a string or an array that contains anything.
//    The function should return the length of the string or the array.

function getLength(value: string | any[]): number {
  return value.length;
}

// Test the `getLength` function with both a string and an array.

console.log(getLength("Hello, TypeScript!")); // Should print the length of the string
console.log(getLength([1, 2, 3, 4, 5])); // Should print the length of the array
