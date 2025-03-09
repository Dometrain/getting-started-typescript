// Static members can have access modifiers.

class MyClass {
  private static myStaticProperty = 42;
  static myStaticMethod() {
    return MyClass.myStaticProperty;
  }
}

// console.log(MyClass.myStaticProperty); // Error: Property 'myStaticProperty' is private and only accessible within class 'MyClass'.
