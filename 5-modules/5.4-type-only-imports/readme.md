# Type Only Imports

We just saw a basic approach for importing types. You can also explicitly declare that the imported type is a type via the `type` keyword.

```ts
import { type Product } from "./types";
```

So this is explicit - it tells TypeScript that you're importing a type, not a value, so TypeScript knows the import isn't necessary in the resulting JS file. Typically, this doesn't matter. TypeScript's compiler is typically smart enough to omit the import if it's only for a type. But in rare cases, being explicit like this can be useful.

Depending on your TypeScript configuration and use case, a type-only import may improve performance, ensure clarity, and prevent unnecessary runtime dependencies.

So, it's generally recommended to prepend the `type` keyword to imported types.

We'll explore more about type-only imports in the deep dive course. But for now, just understand that it's generally best to be explicit when you're importing a type by using the `type` keyword.
