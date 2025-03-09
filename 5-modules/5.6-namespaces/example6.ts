// namespace can enhance an existing class
class User {
  constructor(id: number, name: string) {}
}

// Add static method to class via namespace
namespace User {
  export function fromJSON(json: string): User {
    const data = JSON.parse(json);
    return new User(data.id, data.name);
  }
}

const user = User.fromJSON('{ "id": 1, "name": "Alice" }');
console.log(user);
