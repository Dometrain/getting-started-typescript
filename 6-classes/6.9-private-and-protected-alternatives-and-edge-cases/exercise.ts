// Exercise: Private Field edge cases and alternatives

// Question 1:
// Create and instance of `Student`. Try accessing the private `studentId`
// via the dot syntax and note that it will throw an error.
// Then log the private `studentId` using bracket syntax. Note that this works.

class Student {
  private studentId = 1;
}

// Question 2:
// Create a class `Teacher` with a *JavaScript* private field `teacherId` and a method `getTeacherId`
// that returns the `teacherId`.
// Instantiate the class and call the `getTeacherId` method to log the `teacherId`.
// Note that teacherId is private, and can't be accessed directly.
