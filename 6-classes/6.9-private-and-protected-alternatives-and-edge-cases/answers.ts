// Exercise: Private Field edge cases and alternatives

// Question 1:
// Create and instance of `Student`. Try accessing the private `studentId` via the dot syntax
// and note that it will throw an error.
// Then log the private `studentId` using bracket syntax. Note that this works.

class Student {
  private studentId = 1;
}

const student = new Student();
// console.log(student.studentId); // Error: Property 'studentId' is private.
console.log(student["studentId"]); // Output: 1

// Question 2:
// Create a class `Teacher` with a private field `teacherId` and a method `getTeacherId`
// that returns the `teacherId`.
// Instantiate the class and call the `getTeacherId` method to log the `teacherId`.
// Note that teacherId is private, and can't be accessed directly.

class Teacher {
  #teacherId = 2;

  getTeacherId() {
    return this.#teacherId;
  }
}

const teacher = new Teacher();
console.log(teacher.getTeacherId()); // Output: 2
// teacher.teacherId; // Fails
