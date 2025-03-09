# Namespaces

TypeScript also supports namespaces for grouping code together. But try to avoid this feature. It was added to TypeScript before ECMAScript modules were standardized.

Namespaces are similar to modules, but they have some key differences:

- Namespaces can be split across multiple files.
- Namespaces can be merged across multiple declarations.

Here's an example of a namespace:

```ts
namespace MyNamespace {
  export const myVar = "Hello, world!";

  const myPrivateVar = "This is private!";
}
```

You can access the variable `myVar` like this:

```ts
console.log(MyNamespace.myVar);
```

Since modules already provide a way to organize code, namespaces are largely unnecessary. The same code above could be written as a module:

```ts
export const myVar = "Hello, world!";

const myPrivateVar = "This is private!";
```

That said, namespaces may be useful in a few cases:

1. If you're working in an older codebase that isn't using ES modules, or in the global scope, then namespaces may help group and encapsulate related code. But if you're starting a new project, you should probably use ES modules instead.
2. If you're working with a plain JS library and you want to augment it, namespaces can help. (see `example 3`). This is especially true if the library happens to already use namespaces. (`example 4`). This example extends the Express namespace with a custom user property for the `Request` interface.
3. You can choose to use a namespace to encapsulate and group some code instead of a separate file. That said, I don't recommend this pattern. (see `example 5`).
4. Finally, a namespace can merge with a class to extend a class. (see `example 6`).

In summary, prefer modules instead of namespaces. Avoid namespaces unless you have a good reason to use them.
