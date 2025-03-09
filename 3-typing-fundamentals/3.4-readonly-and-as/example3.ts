// Use as const for object literals
const point = { x: 10, y: 20 } as const;

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
