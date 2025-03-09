## tsc

TypeScript must be compiled to JavaScript to run in the browser. The TypeScript compiler is `tsc`. You can install TypeScript with Node's package manager, which is npm.

If you don't have Node and npm installed, you can download it from https://nodejs.org. This will install both Node.js and npm.

You may need to elevate your privileges to install packages globally. On Windows, run the command prompt as an administrator. On macOS and Linux, use `sudo`.

```bash
sudo npm install -g typescript
```

This way, we can run `tsc` from the command line in any directory.

To compile a TypeScript file, run `tsc` followed by the filename. For example, there's an `example.ts` file in this directory.

Right click the folder, and select Open in terminal. Note that the terminal opens in the correct directory.

Let's compile example.ts with `tsc`:

```bash
tsc example.ts
```

This creates a `example.js` file in the same directory. Open `example.js`. Note that the type was erased. TypeScript only exists at compile-time. The JavaScript output contains no types. The output is clean and readable.

Let's run the JavaScript file with Node.

```bash
node example.js
```

You should see the output `Hello, from TypeScript!`.

# Restarting the TypeScript language server

A little word of warning for VS Code users: Occasionally VS Code's TypeScript language server hangs. If TypeScript doesn't seem to be working properly:

1. Open any TypeScript file
2. Hit CMD+Shift+P to open the command palette
3. Type "TypeScript: Restart TS Server" and hit enter
