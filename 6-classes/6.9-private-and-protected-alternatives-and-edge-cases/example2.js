import { User } from "./example1";

const user = new User("123");
console.log(user.password); // Accessing a private TS property at runtime
