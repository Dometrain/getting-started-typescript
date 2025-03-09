//  `implements` keyword to declares that a class satisfies a given interface.
interface Animal {
  name: string;
  speak(message: string): void;
}

class Dog implements Animal {
  // This is necessary - it's not applied by `implements` since implements only checks for compatibility
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // The is necessary - it's not applied by `implements` since implements only checks for compatibility
  speak(message: string) {
    console.log(message);
  }
}
