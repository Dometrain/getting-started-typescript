# Record

Problem: You want to declare a dictionary style object that has a specific type for the keys and values.

Solution: Use the `Record` utility type.

The `Record` utility type creates an object type whose keys are of a specific type and whose values are of another specific type.

Example:

```ts
type UserAges = Record<string, number>;

const userAges: UserAges = {
  Alice: 30,
  Bob: 25,
  Charlie: 35,
};
```

There are actually two ways to declare a record. This is equivalent to the previous example:

```ts
type UserAges2 = { [key in string]: number };
```

Generally, prefer the Record utility type because it's more readable, and you don't have to invent a name for the key.

TypeScript provides many other utility types that can help you create more complex types. You can create an object with all Readonly fields, create an object that omits specific fields, and much more. You can find the full list under utility types in the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html).

I'm merely covering Record here since it's often useful, but I encourage you to explore the other utility types as well. I'll cover the other utility types in my TypeScript Deep Dive course.
