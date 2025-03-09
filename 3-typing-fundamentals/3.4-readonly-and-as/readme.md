# Immutable objects

To make an object immutable in JavaScript, you can use the `Object.freeze` method. This method prevents the object from being modified, so you can't add, remove, or change properties at runtime.

TypeScript offers another approach to immutability for specific fields: the `readonly` keyword. This keyword can be used to make specific object properties immutable. Here's an example:

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
```

In this example, the `x` and `y` properties of the `Point` interface are `readonly`. This means that you can't change their values after they've been set.

The `readonly` keyword can also be used with classes. Here's an example:

```ts
// Also works with classes
class Point {
  constructor(readonly x: number, readonly y: number) {}
}

const point = new Point(10, 20);

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
```

An object literal can be marked as `readonly` using the `as const` syntax. Here's an example:

```ts
// Use as const for object literals
const point = { x: 10, y: 20 } as const;

// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
```
