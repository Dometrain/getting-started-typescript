// Exercise: Understanding TypeScript's Record Utility Type

// Question 1:
// Create a Record type named `UserRoles` where the keys are user IDs (strings) and the values are roles (strings).
type UserRoles = Record<string, string>;

// Question 2:
// Using the `UserRoles` type, create a variable named `roles` and assign it an object with the following user roles:
// - User with ID 'user1' has the role 'admin'
// - User with ID 'user2' has the role 'editor'
// - User with ID 'user3' has the role 'viewer'
const roles: UserRoles = {
  user1: "admin",
  user2: "editor",
  user3: "viewer",
};

// Question 3:
// Create a function named `getUserRole` that takes a user ID (string) and a `UserRoles` object, and returns the role of the user.
function getUserRole(userId: string, roles: UserRoles): string {
  return roles[userId];
}

// Test your functions
console.log(getUserRole("user1", roles)); // Output: 'admin'
