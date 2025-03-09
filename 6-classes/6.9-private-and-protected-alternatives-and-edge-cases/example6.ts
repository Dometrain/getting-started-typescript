// TypeScript forbids declaring a private property in a subclass
// with the same name as a private property in the superclass.

class Base {
  private value = 1;
}

// @ts-expect-error
class Sub extends Base {
  private value = 2; // Compile error
}

// This is unfortunately allowed with private fields:

class Base2 {
  #value = 1;
}

class Sub2 extends Base2 {
  #value = 2; // Not an error
}
