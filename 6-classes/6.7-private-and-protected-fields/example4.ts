// Derived class may expose a subtype of the base class

class Base {
  protected a = 1;
}

class Derived extends Base {
  a = 2; // No modifier, so public
}

const d = new Derived();
console.log(d.a); // OK
