// Static members are shared between all instances
class MyClass {
  static myStaticProperty = 42;
  static myStaticMethod() {
    return "Hello";
  }
}

// No need to create an instance to call static members
console.log(MyClass.myStaticProperty); // 42
console.log(MyClass.myStaticMethod()); // "Hello"
