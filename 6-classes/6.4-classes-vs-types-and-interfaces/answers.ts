// Question 1: Create an instance of the class below.

class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  describe() {
    console.log(
      `This book is titled "${this.title}" and is authored by ${this.author}.`
    );
  }
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");

// Question 2: Create a new object of type `Tree` below.

type Tree = {
  height: number;
  age: number;
};

const pearTree: Tree = {
  height: 10,
  age: 5,
};

// Question 3: Create a new object of type `Car` below.

interface Car {
  make: string;
  model: string;
  year: number;
}

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2025,
};
