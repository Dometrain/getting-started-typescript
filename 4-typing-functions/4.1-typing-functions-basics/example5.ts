// Structural typing applies to functions too. This is valid.
let add = (a: number, b: number): number => a + b;
let add2 = (c: number, d: number): number => c + d;
add = add2;

// Invalid. Different number of args.
let add3 = (a: number, b: number, c: number): number => a + b + c;
// add = add3; // Error

// If the last parameter is optional, it's still valid.
let add4 = (a: number, b: number, c?: number): number => a + b + (c || 0);
add = add4;
