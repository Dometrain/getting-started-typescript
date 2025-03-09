# Why TypeScript?

I love TypeScript. You will too.
TypeScript is a statically typed language that compiles to JavaScript. It's developed and maintained by Microsoft.

Types allow us to catch errors early, enhance autocomplete, convey intent, make refactoring safer, and make impossible states impossible.

Here I'm at the TypeScript Playground (https://www.typescriptlang.org/play), a great place to try TypeScript without installing anything.

This is a plain JavaScript variable:

```javascript
let age = 1;
console.log(message);
```

We can enhance this code using a type annotation:

```typescript
let age: number = 1;
console.log(message);
```

Now TypeScript knows that `age` is a number. If I try to assign a string to `age`, TypeScript will catch the error at compile-time.

```typescript
age = "one"; // Error: Type 'string' is not assignable to type 'number'.
```

Nice.

Consider a function that adds two numbers:

```javascript
function add(a, b) {
  return a + b;
}
```

We can add type annotations to the function parameters and specify a return value too:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Now TypeScript knows that `a` and `b` are numbers, and the function returns a number. If I try to pass a string to `add`, TypeScript will catch the error at compile-time:

```ts
add("one", 2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

And when I try to call the function, I get autocomplete for the function signature that includes the type info. Nice.

TypeScript is a superset of JavaScript, so existing JavaScript programs are also valid TypeScript programs.

## 6 Reasons to Use TypeScript

See slides.

1. **Catch errors early**: Tired of annoying runtime errors? property doesn't exist, Me too. TypeScript catches errors early at compile-time. Notice that VS Code displays TypeScript errors in real-time.
2. **Enhanced autocomplete**: With TypeScript I don't have to check the docs as often, because my editor tells me what properties and methods are available.
3. **Convey intent**: Types help you write clear, maintainable code that clearly documents expected inputs and outputs.
4. **Types are tests** (with better ergonomics). Of course, types don't replace the need for tests, but types do reduce the number of tests we need to write. And unlike tests, types provide instant feedback on the specific line the moment I mess up.
5. **Safer refactoring**: Renaming a variable or function? TypeScript helps you find all references across your codebase.
6. **Make impossible states impossible**. If a property should always exist, or a function only accepts a number, TypeScript enforces it. TypeScript helps you model your domain more accurately.
