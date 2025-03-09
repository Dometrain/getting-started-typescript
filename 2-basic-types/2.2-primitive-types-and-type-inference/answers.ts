// Exercise: Declare variables with different primitive types in TypeScript

// 1. Declare a variable named `planet` of type string and assign it the value "Earth".
let planet: string = "Earth";

// 2. Declare a variable named `isRaining` of type boolean and assign it the value false.
let isRaining: boolean = false;

// 3. Declare a variable named `pi` of type number and assign it the value 3.14.
const pi: number = 3.14;

// 4. Temporarily assign a value of the wrong type to one of variables above. What happens?
// TypeScript throws an error because the assigned value doesn't match the declared type.

// 5. Remove the explicit type annotations above, then hover over each variable's name. Does anything change?
// TypeScript still infers the types based on the assigned values, so the explicit type
// annotations aren't required in these cases.
// But without the explicit type annotation on `pi`, the type is narrowed to the literal value `3.14`.
