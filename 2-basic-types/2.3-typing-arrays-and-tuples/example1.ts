// Array type
const numbers: number[] = [1, 2, 3];

// Generic type
const numbers2: Array<number> = [1, 2, 3];

// Tuple type
const tuple: [number, string] = [1, "hello"];

// Mixed array via Array type - Similar, but NOT equivalent to above.
const tuple2: Array<number | string> = [1, "hello"];

// Fixed length array
const fixedLength: [number, number, number] = [1, 2, 3];
