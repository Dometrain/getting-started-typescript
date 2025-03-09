// Can rename an imported type using `as`.
import { Product as MyProduct } from "./types";

const product: MyProduct = {
  name: "apple",
  price: 0.5,
};

console.log(product);
