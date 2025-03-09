# Summary: Type vs Interface

So let's summarize how to choose between a type and interface.

In most cases, either will work. But we just saw some unique features of each.

So what about when both `type` and `interface` work? Usually, it doesn't matter. But the TypeScript docs recommend this rule of thumb: [Prefer `interface` when possible](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces:~:text=If%20you%20would%20like%20a%20heuristic%2C%20use%20interface%20until%20you%20need%20to%20use%20features%20from%20type) because the TypeScript language engine sometimes has to do less work for interfaces because of how they're implemented behind the scenes.

So, in summary, prefer interfaces when you possible, but use types when you need to use features from them. And remember, you can always refactor easily later if you need to switch.
