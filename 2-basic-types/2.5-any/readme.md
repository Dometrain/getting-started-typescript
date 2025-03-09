# any

In type systems, there's the concept of top types and bottom types. A top type can be anything. And a bottom type represents a value that can't happen.

TypeScript has two top types: any and unknown. And it has one bottom type: never.

Let's discuss any first.

What if you don't know what type a variable will be? Or you want to allow any type? TypeScript has a type for that: `any`.

Here's how you can use `any`:

```ts
let age: any = 42;

// Since age is typed as `any`, I can assign any type to it:
age = "uh oh";
```

I can also declare a function that accepts any type:

```ts
function logValue(value: any) {
  console.log(value);
}

logValue(42);
logValue("Hello, TypeScript!");
```

JavaScript's fetch returns a promise of type `any` by default:

```ts
// Fetch returns a Promise<any>
async function getUserById(id: number) {
  const resp = await fetch("http://example.com/user/1");
  return resp.json();
}

let user = getUserById(1);
```

And if you don't specify a type, TypeScript will infer `any`:

```ts
// Missing types are inferred as `any`.
function add(a, b) {
  return a + b;
}
```

`any` is the most flexible type in TypeScript. It disables type checking for that variable. This is useful when you're migrating a JavaScript project to TypeScript and you can't deal with all the type errors yet. It's also useful in rare cases where you truly want to accept anything. But avoid using `any` as much as possible. The whole point of TypeScript is to catch type errors, and `any` disables that!

I've seen projects with over 1,000 `any` types. That's a problem. It means you're not getting the full benefits of TypeScript. I've worked in other projects where we didn't use `any` at all. It's typically possible to write TypeScript without `any`. And it's worth the effort.

I recommend configuring tsconfig.json to have strict mode enabled. With strict mode enabled, any explicit `any` will create a warning.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

If strict mode isn't enabled, you can also enable just the `noImplicitAny` option to get a warning when you use `any`.

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

As I mentioned, TypeScript has two "top types". Any is the first. The second is `unknown`. Let's discuss it next.
