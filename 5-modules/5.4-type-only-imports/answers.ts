// Question 1: Change the import below to a type-only import.
import type { Product } from "./types";

function getProductPrice(product: Product): number {
  return product.price;
}
