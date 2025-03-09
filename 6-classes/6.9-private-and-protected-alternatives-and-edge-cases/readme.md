We just saw multiple uses for `private` and `protected` access modifiers. Now, let's see some edge cases and alternatives.

First, remember that TypeScript's `private` and `protected` access modifiers are only enforced at compile time. They don't exist in the compiled JavaScript output. This means that you can still access private and protected fields at runtime.

To see this in action, let's compile example1.ts to example1.js and run it:

```bash
tsc example1.ts
```

Now, let's run `example2.js`, which accesses the private field password:

```js
import { User } from "./example1.js";

const user = new User("123");
console.log(user.password); // 123
```

```bash
bun example2.js
```

Notice that this works because the field is still accessible at runtime. Private and protected fields are only enforced at compile time. Also, note that I started with a js file here. If this were a ts file, the TypeScript compiler would have thrown an error.

There's another edge case to be aware of. TypeScript allows you to access private fields via bracket notation. This is useful when you need to access a private field dynamically, or when you want to access a private field for testing purposes. Here's an example:

```ts
// Workaround: Can access private fields via bracket notation.
export class User {
  private password = "123";
}

const user = new User();
console.log(user["password"]); // 123
```

So what if you want true runtime safety? Well, JavaScript has built-in private fields, which are marked with the `#` symbol. TypeScript also supports this syntax. Here's an example:

```ts
class Person {
  private name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}
```

In this example, `name` is a private field and `#age` is a JavaScript private field. The main difference between the two is that TypeScript's private fields are only enforced at compile time, while JavaScript's private fields are enforced at runtime.

You might wonder why both exist. TypeScript's private and protected keywords were added to TypeScript before JavaScript private fields were standardized. TypeScript's private and protected fields have some advantages over JavaScript private fields, but JavaScript private fields are more secure.

There are some other notable differences. TypeScript forbids declaring a private property in a subclass with the same name as a private property in the superclass.

```ts
class Base {
  private value = 1;
}

// @ts-expect-error
class Sub extends Base {
  private value = 2; // Compile error
}

// This is unfortunately allowed with private fields:

class Base2 {
  #value = 1;
}

class Sub2 extends Base {
  #value = 2; // Not an error
}
```

## TypeScript's `private` advantages:

- Can be read from unit tests like this `obj._privateProperty` in the compiled JavaScript output.
- Better runtime performance - No runtime cost.
- Easier debugging. You can still view and inspect the fields in the browser’s developer tools.
- Compatible with older runtimes and browsers.

## JavaScript's `#` advantages:

- Private at runtime.
- Deeply private - Not returned by Object.getOwnPropertyNames or serialized by JSON.stringify
