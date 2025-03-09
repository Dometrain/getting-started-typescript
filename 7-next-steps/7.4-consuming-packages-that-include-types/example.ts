// Consuming an npm package that includes types
import { format } from "date-fns";

const month = format(new Date(), "LLLL");
console.log(month);
