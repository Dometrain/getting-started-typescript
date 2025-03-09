# Exporting and Importing types

So far we've been referencing types in the same file. What if you want to use a type from another file? You can export and import types just like you export or import functions or variables.

```ts
import { Product } from "./types";
```

Compile `example1.ts`. Since it relies on both the type and the function in the types.ts file, the import is included in `example1.js`.

Now compile `example2.ts`. This file only uses the type from the types.ts file. The import is **excluded** from the js. So tsc is typically smart enough to remove the import if it's only used for types.

When importing a type, you can optionally rename it. This is useful when you want to avoid naming conflicts.

```ts
import { Product as MyProduct } from "./types";
```
