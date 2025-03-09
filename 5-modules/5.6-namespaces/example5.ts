// Using a nested namespace to group and encapsulate instead of a separate file
namespace App {
  export namespace Models {
    export interface User {
      id: number;
      name: string;
    }
  }

  // Nested namespace
  export namespace Utils {
    export function greet(user: Models.User): string {
      return `Hello, ${user.name}`;
    }

    function privateFunction(): void {
      console.log("This is private!");
    }
  }
}

const user: App.Models.User = { id: 1, name: "Alice" };
console.log(App.Utils.greet(user));

// This will not work because `privateFunction` is private.
// App.Utils.privateFunction();
