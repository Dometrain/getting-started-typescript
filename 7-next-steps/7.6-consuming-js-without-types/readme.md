# Consuming JS without types

These days, most npm packages either include type definitions, or the types are available separately.

But, some packages on npm are published in JavaScript and no type definitions are available anywhere. If no types exist, write your own type definitions. This is more work, but you gain type safety.

## Creating your own type definitions

Let's assume we want to use a package called `pluralize` and it doesn't have type definitions. We can review the docs and the source code to understand how to use it. Then, we can declare the types ourselves.

First, we need to declare a namespace that we can import:

```typescript
declare namespace pluralize {
  /** Pluralize a word. */
  function plural(word: string): string;
}

export = pluralize;
```

For TypeScript to allow us to import this, we need to add a `paths` entry to the root `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "pluralize": [
        "./7-next-steps/7.6-consuming-js-without-types/pluralize.d.ts"
      ]
    }
  }
}
```

Now, we can import the package:

```typescript
import pluralize from "pluralize";
```
