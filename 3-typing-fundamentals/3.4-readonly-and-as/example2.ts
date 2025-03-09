// Also works with classes
class Point {
  constructor(readonly x: number, readonly y: number) {}
}

const point = new Point(10, 20);

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
