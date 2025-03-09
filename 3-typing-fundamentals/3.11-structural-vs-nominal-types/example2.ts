// Even works if one of the interfaces had an extra property:

interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

const user: User = { id: 1, name: "Cory", age: 30 };

// Allowed because the two interfaces have a compatible structure. But the age property is not used.
const product: Product = user;
console.log(product);

// Error - No age property on Product.
// product.age;
