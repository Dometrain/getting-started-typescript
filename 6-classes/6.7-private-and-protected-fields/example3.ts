// protected members are accessible within the class and its subclasses
class Chef {
  public cook() {
    console.log("Cooking " + this.getDish());
  }
  protected getDish() {
    return "pasta";
  }
}

class SpecialChef extends Chef {
  public prepareSpecialDish() {
    // OK to access protected member here
    console.log("Preparing special dish: " + this.getDish());
  }
}

const chef = new SpecialChef();
chef.cook(); // OK
// chef.getDish(); // Error: Property 'getDish' is protected and only accessible within class 'Chef' and its subclasses.
