// Exception Handling

// Exception handling is a mechanism to handle runtime errors in a program. It allows developers to manage errors gracefully without crashing the application. In JavaScript, exceptions can be handled using try-catch blocks.
// Errors - Logical errors, Syntax errors, runtime errors.

// try-catch block is used to handle exceptions. The code that may throw an exception is placed inside the try block, and the catch block contains the code to handle the exception if it occurs.
// The finally block is optional and contains code that will always execute after the try and catch blocks, regardless of whether an exception was thrown or not.

// Syntax
exp = '/15*(10 * 20)';
try {
  console.log("Try Block");
  console.log(eval(exp));
} catch (error) {
  console.log("Catch Block");
  console.log(error);
} finally {
  console.log("Finally Block");
}