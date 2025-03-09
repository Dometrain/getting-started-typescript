interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
