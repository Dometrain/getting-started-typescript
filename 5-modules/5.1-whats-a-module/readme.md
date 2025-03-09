# Session Intro

So far, all our code and our types have been in the same file. But what if we want to reference types in different files?

In this section I'll explain what a module is, we'll import and export TypeScript types so they can be shared across a project, we'll declare ambient types that can automatically be accessed in any file, we'll use namespaces to encapsulate code, and we'll declare types for global values and functions.

# What's a module?

When JavaScript was first created, it didn't have a built-in module system. This made it difficult to organize code and share it between files. Developers had to use global variables and functions to share code, which led to naming conflicts and other issues.

```html
<html>
  <head>
    <script src="a.js"></script>
    <script src="b.js"></script>
  </head>
  <body></body>
</html>
```

These two files share the global scope. If `a.js` defines a variable or function with the same name as `b.js`, it will overwrite it. This can lead to bugs that are difficult to track down.

To solve this problem, modules we're introduced. Throughout JavaScript's history, many module systems have been used such as AMD, and CommonJS which was popularized by Node.

Modules allow you to define private code that can't be accessed from other files. You can export functions, variables, classes, and types from a module and import them into other modules. This makes it easier to organize and share code between files.

In 2015, JavaScript introduced its own built-in module system called ES modules or ESM for short. With ESM, a module is a file that uses import and export statements to share code between files. A module can export functions, variables, classes, and types. Other modules can import these exports to use them. Modules run in their own scope. Everything is private by default.

A file is considered a module if it contains at least one import or export statement.

So, this is a module:

```ts
export {};
```

And this is a module:

```ts
import * as example from "./example2"; // This file is a module because it has an import statement
```

# Non-module code

If a file isn't a module, it's assumed to contain global code. This means that all the code in the file is available in the global scope. This can lead to naming conflicts and other issues. Generally, it's a good idea to use modules to keep your code organized and avoid these problems. But non-module code can be useful to interact with the global scope in the browser.

If you have a file that doesn't contain any import or exports, but you want to make it a module, add this to the file:

```ts
export {};
```

This tells TypeScript that the file is a module, even though it doesn't contain any exports.
