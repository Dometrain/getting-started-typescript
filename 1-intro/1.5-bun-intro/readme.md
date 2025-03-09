# Bun Intro

Bun is a modern, fast, Node compatible JavaScript runtime. Bun is [one of the fastest](https://betterstack.com/community/guides/scaling-nodejs/nodejs-vs-deno-vs-bun/) ways to run TypeScript code today. It has built-in TypeScript support, so we don't need to compile our TypeScript to run it via Bun. Bun has Node-like APIs. It's generally compatible with node_modules. But most important for our purposes, it's very fast.

Let's start by installing Bun from https://bun.sh/. The exact command differs for Mac, Windows, and Linux.

I've provided a repository that contains the code for this course at https://github.com/Dometrain/getting-started-typescript. Clone this repository to follow along.

After installing Bun and cloning the repo, run the example.ts file in this lesson's directory with the following command:

```bash
bun example.ts
```

You should see the output "Hello, from TypeScript!" in the terminal.

And that's it. For now, think about Bun as a fast JavaScript runtime that supports TypeScript. And don't worry, this course is focused on TypeScript, not Bun. So, we're going to focus on learning TypeScript. We'll merely use Bun to run our code since Bun is the fastest and most convenient way to run TypeScript today.
