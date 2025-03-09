// Exercise 1: Make the title field readonly.

class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}

// Exercise 2: Attempt to modify a readonly field
// Create an instance of the `Book` class and try to modify the `title` field.
// What error do you get?

const book = new Book("The Great Gatsby");
// book.title = "New title"; // Error: Cannot assign to 'title' because it is a read-only property.
