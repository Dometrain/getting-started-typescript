# Consuming JavaScript libraries

So what if a JavaScript library you're using doesn't include type definitions? Well, there's a good chance that someone else has already written them. Let's look at an example.

When we import `pluralize`, we can see that types aren't included. We don't get any autocomplete or type checking. This is because the `pluralize` package doesn't include type definitions:

Could not find a declaration file for module 'pluralize'. '/Users/coryhouse/Library/CloudStorage/Dropbox/Courses/TypeScript/demos/1-getting-started/node_modules/pluralize/pluralize.js' implicitly has an 'any' type.
Try `npm i --save-dev @types/pluralize` if it exists or add a new declaration (.d.ts) file containing `declare module 'pluralize';`ts(7016)

It suggests installing them from `@types`. Let's do that:

```bash
bun add @types/pluralize
```

Now, when we import `pluralize`, we get type definitions. We get autocomplete and type checking. This is because the `@types/pluralize` package includes type definitions. We can actually see this if we look in `node_modules/@types/pluralize/index.d.ts`.

These types are provided from a huge community effort to provide type definitions for JavaScript libraries. This is a great way to consume JavaScript libraries in TypeScript. If you go to https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types, you can see all the type definitions that are available. Each of these types is a separate package on npm that you can install. They all start with `@types`.

But in some rare instances, the types may not be available for an old or unpopular library, so you may need to write your own type definitions. Let's cover that next.
