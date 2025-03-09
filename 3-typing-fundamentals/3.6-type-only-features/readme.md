# Types vs Interfaces

As we saw earlier, In TypeScript, you use either `type` `interface` to define custom types. They're often interchangeable. Often, you can use either. But there are some key differences, so let's explore the differences.

These two examples are equivalent:

```ts
type UserType = { name: string; age: number };

interface UserInterface {
  name: string;
  age: number;
}
```

Both can describe a function signature too

```ts
type UserFunctionType = (name: string, age: number) => void;

interface UserFunctionInterface {
  (name: string, age: number): void;
}
```

So how do you choose between `type` and `interface`? Each have some unique features.

Here are 6 type only features:

```ts
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

readonlyUser.name = "Jane"; // Error: Cannot assign to 'name' because it's a readonly property.

// 6. Typed arrays
type Users = User[];
```

No exercise on this lesson, since we've already covered these features. In the next lesson, let's explore a few features that are only supported on interfaces.
