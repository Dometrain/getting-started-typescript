# Types Intro

TypesScript is all about types. TypeScript has the usual types you might expect from a statically typed language: `number`, `string`, `boolean`, `object`, `null`, and `undefined`.

Here's a simple example of each:

```ts
// Explicit types
let age: number = 42;
let msg: string = "Hello, TypeScript!";
let isAdmin: boolean = true;
let nullThing: null = null;
let undefinedThing: undefined = undefined;
```

This isn't a complete list, but these are the types you'll likely use most.

Now you might look at this code and think, hrmm, that's noisy compared to JS. Well, good news, TypeScript can infer the type based on the value you assign. So you can write the same code like this:

```ts
// Inferred types
let age = 42;
let msg = "Hello, TypeScript!";
let isAdmin = true;
let nullThing = null;
let undefinedThing = undefined;
```

TypeScript infers the type based on the value. This is called type infererence. It's often useful to be explicit about types, but you don't have to be.

Here's an important general rule: Generally try to infer types when you can. Generally, only declare types when the type cannot be inferred. This saves time, and avoids needlessly repeating types.

In JavaScript, const vs let is a bit of a religious debate. Some developers prefer `const` by default, others prefer `let`.

Here's the same code with const:

```ts
// With const, inferred types are "narrower"
const age = 42;
const msg = "Hello, TypeScript!";
const isAdmin = "true";
const nullThing = null;
const undefinedThing = undefined;
```

Note that the types are narrower with const. This is because TypeScript knows the value can't change. TypeScript infers the type as the literal value. So the age is literally 42, the msg is literally "Hello, TypeScript!", and so on.

With TypeScript, I suggest using `const` when possible. `const` often produces a narrower type - it's the literal value, because TS knows it can't change. With let, the type is the type of the value you assign, because it could change. Generally, I use const when possible. It's safer, and helps convey to the reader that the value won't change later.

That said, if you need to reassign a variable, use `let`.
