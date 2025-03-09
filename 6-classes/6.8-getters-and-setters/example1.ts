// If get exists but there's no set, the property is readonly:
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const person = new Person("Alice");
console.log(person.name); // Alice
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
