interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  console.log(user);
}

const product: Product = { id: 1, name: "Product 1" };

// No error, even though printUser expects a User
printUser(product);
