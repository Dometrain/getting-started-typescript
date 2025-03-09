// Static blocks are useful for class-level initialization.

class StaticExample {
  // Unlike constructor, static block executes only once when the class is first loaded in the environment.
  static {
    console.log(`Running static block...`);
  }
}

const instance1 = new StaticExample();
const instance2 = new StaticExample();
