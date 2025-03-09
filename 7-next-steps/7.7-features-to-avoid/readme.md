I ❤️ TypeScript.

But, I want to emphasize that TypeScript contains a few features that we learned in this course that I suggest you avoid:

1. Enums. An object marked "as const" accomplishes the same thing. And unions are often a simpler, lighter-weight solution.

2. Namespaces. This feature predates ES Modules. ES modules are sufficient for encapsulation.

3. Class parameter properties. These can be replaced with a traditional constructor.

There's a common problem with these features - TypeScript is supposed to be JS with types. If we remove the types, what's left should be valid JS.

These 3 features break this rule. They generate extra code when compiled.

The good news is, these features can be easily forbidden via a tsconfig setting called `erasableSyntaxOnly`. This flag assures all TypeScript syntax can simply be deleted without changing the runtime behavior. So using only erasable syntax streamlines the development process and reduces the need for compilation in certain contexts.

For example, modern Node has built-in TypeScript support, but it works by stripping out the types. So, if you use only erasable syntax, you can run TypeScript in Node without any compilation step. This is a great way to speed up your development process.

If you have at least Node 23 installed, you should be able to run the files in the `prefer` directory without any compilation step. This is because they only use erasable syntax. But, if you try to use Node to run the files in the `avoid` folder, you'll get an error because their features that can't be erased. To run the `avoid` files via Node, you need to compile them via tsc first.
