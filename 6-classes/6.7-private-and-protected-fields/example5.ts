// Can't access a private field from a derived class, nor can you override it.

class Base {
  private x = 0;
}

class Derived extends Base {
  // x = 1; // Class 'Derived' incorrectly extends base class 'Base'. Property 'x' is private in type 'Base' but not in type 'Derived'.
}
