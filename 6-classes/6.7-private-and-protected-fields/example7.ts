// Different instances of the same class can access each other's private fields.

class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

const a1 = new A();
const a2 = new A();
console.log(a1.sameAs(a2)); // true
