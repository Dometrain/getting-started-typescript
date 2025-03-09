# Enums and alternatives

Enums create a set of related named constants. In this case, `Color` is an enum with 3 values: `Red`, `Green`, and `Blue`.

Here's how you can use an enum:

`example 1`

Enums are probably TypeScript's most controversial feature because enums don't exist in JavaScript. And enums are also odd because unlike other types, the enum code is compiled to JavaScript. Here's the compiled JavaScript:

`example 2`

If you want to reduce the amount of runtime code generated, you can use a `const enum`. This is a compile-time feature that inlines the enum values. Here's how you can use a `const enum`:

`example 3`

And here's the compiled JavaScript of the const enum:

```javascript
// todo
```

You don't have to use an enum. Generally, prefer using an object marked as const instead:

`example 4`

This accomplishes the same thing using plain JavaScript. Prefer a plain object over an enum because it's simpler and more idiomatic JavaScript.

And here's a handy tip: What if you need a runtime array, but also want a union type? Use const assertion to create array and union types that are readonly and narrowable.

```ts
const fruits = ["Apple", "Orange", "Pear"] as const;
type Fruit = (typeof fruits)[number]; // "Apple" | "Orange" | "Pear"
```
