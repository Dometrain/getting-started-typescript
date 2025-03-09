Problem: You want to mix two types together.

Solution: Use a type intersection.

To intersect two types, use the `&` operator. This creates a new type that has all the properties of both types.

Here's an example:

```ts
type User = { name: string } & { age: number };
// ^? { name: string; } & { age: number; }
```

So objects blend the properties of both types:

Primitives intersect differently. Primitives intersect as the union of the types. Nothing can be both a number and a string, so the type is never.

```ts
type NumberAndString = number & string;
// ^? never
```

You can also union a primitive and an object. You might expect this to resolve to `never`, but it doesn't. Why? Because doing so would break branded types, an advanced feature I explore in the deep dive course. More here: https://stackoverflow.com/a/65908955/26180

```ts
type test = string & { name: string };
// ^ string & { name: string; }
```
