namespace MyNamespace {
  export const myVar = "Hello, world!";

  const myPrivateVar = "This is private!";
}

console.log(MyNamespace.myVar);

// This will not work because `myPrivateVar` is private.
// console.log(MyNamespace.myPrivateVar);
