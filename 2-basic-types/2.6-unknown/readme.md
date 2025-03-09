# Unknown

I just mentioned that `any` should be avoided. What should you prefer instead? Consider `unknown`. Unknown is a safer alternative to `any`. With unknown, you have to perform a type check before you can do anything with it.

So, `unknown` is useful for values accepted at runtime when we don't know the expected type.

Here's how you can use `unknown`:

```ts
// Specifying return type of unknown instead of any
async function getUserAge(id: number): Promise<unknown> {
  const resp = await fetch("http://example.com/user/" + id);
  return resp.json();
}

function isOldEnoughToVote(age: number): boolean {
  return age >= 18;
}

async function process() {
  const age = await getUserAge(1);
  // Must narrow type before using
  if (typeof age === "number") {
    console.log(isOldEnoughToVote(age));
  }
}
```

We just covered the two top types in TypeScript: `any` and `unknown`. Remember, `any` is the most flexible type, but it's also the least safe. `unknown` is a safer alternative to `any`. Use `unknown` when you don't know the type of a value.

We'll discuss TypeScript only bottom type, which is called `never` in an upcoming clip, but to help you understand when `never` is useful, let's discuss a key topic called union types first.
