# Course Workflow

For the rest of the course, each lesson contains the same 3-step rhythm:

1. Explain a concept with examples
1. Introduce exercise
1. Review exercise answers

## Files

To support this rhythm, each lesson folder contains the following files:

1. **readme.md** - Each lesson contains a `readme.md` file that contains a general summary. The readme is basically my script for narrating each lesson. Code examples included inline. So, you may find it helpful to review this file if you prefer to walk through the ideas presented in video via text.

2. **example.ts** - Second, most lesson folders contain one or more example files. These files are the code examples that I use in the lesson. You can run these files via Bun, as I showed in the previous section.

3. **exercise.ts** - Third, most lesson folders also contain an exercise file. This file contains a coding exercise to test your understanding of the lesson. You can check your answers via the `answers.ts` file.

## Section Agenda

In this section, we're going to explore basic types you'll use every day including:

- primitives like string, number, and boolean
- arrays and tuples
- objects
- Representing unknown values via any and unknown
- Representing things that should never occur via the `never` type
- accepting 2 or more types for a value via union types
