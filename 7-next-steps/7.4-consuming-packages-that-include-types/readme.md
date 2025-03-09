# Consuming Packages that Include Types

When working in TypeScript, you'll likely consume many npm packages. TypeScript has been around awhile, so most npm packages provide built-in types which make them easy to use with TypeScript.

Let's install a package and see how to use it with TypeScript.

## Installing a package

Let's install `date-fns`, a popular date utility library.

```bash
bun add date-fns
```

This package, like most modern packages, includes type definitions. So when you import it, you'll get type checking and autocomplete.

## Using the package

```ts
import { format } from "date-fns";

const month = format(new Date(), "LLLL");
console.log(month);
```

In this example, we import the `format` function from `date-fns` and use it to format the current date. The `format` function takes a date and a format string and returns a formatted date string.

Note that we get autocomplete support and type checking, and we can see all the available functions in `date-fns` when we import it. Easy.
