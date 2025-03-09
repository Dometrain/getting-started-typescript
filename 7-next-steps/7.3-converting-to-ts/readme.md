# Converting From JavaScript to TypeScript

Have an existing JS project? Good news! You can convert to TypeScript incrementally with this approach:

1. First, add a tsconfig file and start writing TypeScript in new files.
2. And over time, you can convert one file at a time from JavaScript to TypeScript.

I've helped multiple teams do this. It's time-consuming, but it's worthwhile. And it's super rewarding finding and fixing bugs along the way.

## Converting a file

Let's try 2 now. This directory contains two js files: `example.js` and `triangle.js`. Generally, it's best to start with files that have fewer dependencies (leaf nodes).

So, let's start by converting `triangle.js` since it has no dependencies. To convert a JavaScript file to TypeScript, rename the file from `.js` to `.ts`. When you do, TypeScript will check your code for type errors.

Now, let's change `example.js` to `example.ts` and see what happens. Notice that TypeScript immediately finds errors in the code even though we haven't added types yet.

We can manually add types, or we can use an LLM like GitHub Copilot to help us.

If you can't quickly fix the errors, then you have options:

1. **Any**: Use the `any` type to opt-out of type checking. This is a quick way to silence errors, but it's not recommended. The `any` type is a black hole that swallows all type errors. It's better to fix the errors.
2. **Suppress errors**: Use a `// @ts-ignore` or `// @ts-expect-error` comment to suppress errors on a line-by-line basis. This is a quick way to silence errors, but it's not recommended. It's preferable to fix the errors as soon as possible.
3. **Extract code that you can't type**: If you can't type a piece of code, extract it to a separate JS file.
4. **Disable type checking**: Or, of course you can temporarily give up rename the file back to `.js`.

Also, there are some relevant tsconfig settings for converting to TypeScript:

1. `allowJs` allows lets you import .js files into .ts files.
2. `checkJs` checks .js files for type errors. If this is enabled, we can see the type errors in our example.js file.

You may also find tools like [ts-migrate](https://github.com/airbnb/ts-migrate) useful to automate the initial conversion. But be forewarned, ts-migrate will add a bunch of `any` types to your code, and comments to ignore various errors. So your code will compile, and all files will be .ts file, but you'll need to go through and resolve these issues over time.

As you progress, you can enable settings that enforce stricter type checking such as:

- strictNullChecks
- noImplicitAny
- strictPropertyInitialization

What if you're using a lot of npm packages? Let's discuss consuming npm packages next.
