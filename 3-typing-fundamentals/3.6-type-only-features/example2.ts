// Type only features

// 1. Type alias for primitives
type Age = number;

// 2. Union
type WindowState = "open" | "closed" | "minimized";

// 3. Tuple
type StringNumberPair = [string, number];

// 4. Type intersection
type PartialStyle = { width: number };
type Style = PartialStyle & { height: number };

// 5. Mapped types / Utility types (create new type from existing type)
interface User {
  name: string;
  age: number;
  email: string;
}

type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// This would fail
// readonlyUser.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.

// 6. Typed arrays
type Users = User[];
