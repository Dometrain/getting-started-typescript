// Primitives and objects intersect differently

// Primitives intersect as the union of the types. Nothing can be both a number and a string,
// so the type is never.
type NumberAndString = number & string;
// ^? never
