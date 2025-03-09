Interfaces and types can interact with each other

```ts
// Interface can extend type
type User = { name: string };

interface UserWithAge extends User {
  age: number;
}

// Type can extend interface
interface User {
  name: string;
}
type UserWithAge = User & { age: number };

// And both can extend a class:
type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}
```
