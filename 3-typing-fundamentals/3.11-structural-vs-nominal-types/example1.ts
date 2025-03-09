// TypeScript types are structural, not nominal.
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

const product: Product = { id: 1, name: "Cory" };

// Allowed because the two interfaces have a compatible structure
const user: User = product;
