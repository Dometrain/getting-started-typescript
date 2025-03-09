// Workaround: Can access private fields via bracket notation.
export class User {
  private password = "123";
}

const user = new User();
console.log(user["password"]); // 123
