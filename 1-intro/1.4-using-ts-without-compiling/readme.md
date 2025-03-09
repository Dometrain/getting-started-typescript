## Using TypeScript without compiling

Good news, you typically don't need to run tsc yourself these days. Why? Two reasons:

1. Most editors have built-in TypeScript support that compiles your code in the background. Microsoft's VS Code is my favorite, and it's the most popular editor for TypeScript development today. I'll use VS Code throughout the course. If you prefer a different editor that's fine, but consider installing VS Code - It's free and the most popular TypeScript editor.
2. Modern JavaScript runtimes like Node, Deno, and Bun have built-in TypeScript support. Node and Bun strip out TypeScript types, so you basically rely on your editor running tsc behind the scenes to catch type errors.

Again, Node 23's TypeScript support is experimental. Node 24 or later is expected to have stable TypeScript support built-in. If you have Node.js 23 or newer installed, you can run TypeScript files directly.

This runs the TypeScript file directly without compiling it to JavaScript.

If that doesn't work for you, run `node -v` to see what version of Node you're using. You need at least Node 23 to run TypeScript files directly.

Node is popular and mature, but in this course we're going to run TypeScript via Bun. Why? Well let me answer that next.
