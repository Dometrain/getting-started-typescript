// Declare ambient type for `myLibrary`.
declare const myLibrary: {
  version: string;
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};

// Do NOT do this. Executable code does NOT belong in a d.ts file.

// export function doStuff(message: string) {
//   console.log(message);
// }

// Do NOT do this. Plain types do NOT belong in a d.ts file.

// export type User = {
//   name: string;
//   age: number;
// };
