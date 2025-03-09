// Can't do the reverse. If I try to assign a `Product` to a `User`,
// TypeScript throws an error because the `Product` interface doesn't have the `age` property:
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

const product: Product = { id: 1, name: "Product 1" };

// This errors
// const user: User = product; // Error: Property 'age' is missing in type 'Product' but required in type 'User'.
