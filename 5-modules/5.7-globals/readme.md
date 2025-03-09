# Globals

Sometimes you'll need to reference a global variable or function in your code. A good example of this is when you want to reference `window` in the browser. In TypeScript, you can use the global keyword to declare a variable or function that is available in the global scope.

```typescript
declare global {
  interface Window {
    username: string;
  }
}
```

# Next up

JavaScript support classes. And TypeScript adds many type-safe features on top of classes. In the next section, we'll explore a variety of techniques for typing classes in TypeScript.
