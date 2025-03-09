# tsconfig

You can customize TypeScript's behavior with a `tsconfig.json` file. This file tells the TypeScript compiler how to compile your code. The tsconfig.json file is optional. If it's missing, defaults will apply. But you typically want to declare a tsconfig.json so you can override some defaults.

The tsconfig should be stored in the root of your project. You can also declare a `tsconfig.json` file in a subdirectory to override the settings in the root `tsconfig.json` file for a directory.

There is already a tsconfig file in the root of this project. Open it up. There are a few settings in here. Let's review the settings.

To generate an example `tsconfig.json` file in this directory, run:

```bash
tsc --init
```

This generates a giant config files with around 100 settings, each documented via a comment. It's admittedly intimidating, and the wild thing is this isn't even all the settings. But don't worry, you typically don't need most of these. Note that although the file extension is .json, comments are allowed. And many frameworks and libraries have recommended `tsconfig` settings so you don't have to mess with this. I've provided a minimal `tsconfig.json` file in the project root. Open it.

This file tells TypeScript to compile to the latest ECMAScript version, use the latest module system, and enforce strict type checking. That last one is important. Be sure to have `strict` on in any new project - it catches more errors.

To compile your code with this config, run:

```bash
tsc
```

This will compile all `.ts` files in the project, and write the files to `dist` as configured.

If your project has different types of code such as DOM code, server code, tests, etc., you can use multiple `tsconfig.json` files. Each file can have different settings. To compile with a specific config file, run:

```bash
tsc -p path/to/tsconfig.json
```

NOTE: Some tsconfig settings are ignored when you specify a source file. If you want to use a tsconfig file, you must run `tsc` without any arguments. Source: https://github.com/microsoft/TypeScript/issues/6591#issuecomment-179361953

# Next up

Alright, section 1 complete. Next up, let's dig into TypeScript's basic types.
