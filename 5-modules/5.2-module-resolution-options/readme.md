# Module resolution and output strategies

TypeScript uses a set of rules to determine how to find and load modules. This process is called module resolution. There are two strategies:

- Classic (basically for backwards compatibility)
- Node

The Node strategy is the default and recommended strategy. It's more powerful and flexible than the classic strategy, and it's the only strategy that supports the `baseUrl` and `paths` options in `tsconfig.json`.

# Output strategies

There are 2 key settings that determine how tsc will output the compiled code:

- [module](https://www.typescriptlang.org/tsconfig/#module)
- [target](https://www.typescriptlang.org/tsconfig/#target)

The module setting determines what module system the compiled code should use. The most common are:

- ES Modules (what we're writing in this course)
- commonjs (Node.js)

ES Modules was introduced in 2015 and is the most modern and flexible module system. CommonJS was popularized by Node.

ES Module imports look like this:

```ts
import * as esExample from "./example";
```

CommonJS imports look like this:

```ts
const cjsExample = require("./example");
```

ES Module exports look like this:

```ts
export function myFunction() {
  // code
}
```

CommonJS exports look like this:

```ts
module.exports = {
  myFunction,
};
```

CommonJS is old. It predates ES modules. CommonJS was popularized by Node.js, and it's still used in Node.js today.

At the time of recording, Node.js has experimental ES module support.

We're using ES modules in this course, and you should typically use ES modules in new projects. TypeScript's compiler can convert ES modules to CommonJS if you're targeting older versions of Node that don't support ES modules.

Full list: https://www.typescriptlang.org/tsconfig/#module

Target determines which JS features are converted to work in older environments. Full list: https://www.typescriptlang.org/tsconfig/#target

The TypeScript deep dive course will explore these settings in more detail.
