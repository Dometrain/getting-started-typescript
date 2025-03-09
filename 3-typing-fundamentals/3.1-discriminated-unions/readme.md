# Section Intro

We just covered a variety of basic types. In this section we'll learn handy concepts you'll use every day including

- composing types together via unions and intersections
- enums and alternatives
- readonly values and properties
- - Record which is useful for dictionary-like types
- types vs interfaces
- and structural vs nominal typing
- and more.

# Discriminated Unions

Sometimes code needs to work with a few different types that have a different shapes. Discriminated unions are a way to work with these types in a type-safe way.

Here's an example:

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;
```

In this example, we have two interfaces: `Circle` and `Square`. Both have a `kind` property that is a string literal. This is called a _discriminant_. The `kind` property determines which type a value is.

This is useful when you have a function that works with both types:

```ts
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

Note that now the type is narrowed based on the `kind` property. Once TypeScript knows the `kind`, it knows the shape of the object, and thus, knows what fields are available.

To clarify, the `kind` property could be named anything. You decide. The point is TypeScript is smart enough to narrow the type based on a property's value. Other common names for the discriminant property are `type` and `tag`.
