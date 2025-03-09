// This file is excluded from the .js file if we only import a type from it.
import { Product } from "./types";

const product: Product = {
  name: "apple",
  price: 0.5,
};

// If runtime code like this is included, then the types.js file will be imported in example1.js
// console.log(hello());
