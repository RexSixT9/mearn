// Create a function sayHi() with no parameters that logs “Hi there!”.
// function sayHi() {
//   console.log("Hi there!");
// }
// sayHi();

// Write a function gradeScore(score) that returns:
// "Excellent" if score ≥ 90
// "Good" if score is between 75 and 89
// "Needs Improvement" if score < 75
// function gradeScore(score) {
//   if (score <= 100 && score > 0) {
//     if (score >= 90) {
//       return "Excellent";
//     } else if (score >= 75 && score <= 89) {
//       return "Good";
//     } else {
//       return "Needs Improvement";
//     }
//   } else {
//     return "Invalid score";
//   }
// }
// console.log(gradeScore(-10));

// Create a function introduce(name = "Anonymous") that prints “My name is <name>”. Call it with and without an argument.
// function introduce(name = "Anonymous") {
//   console.log(`My name is ${name}`);
// }
// introduce("Kiran");
// introduce();

// Make a function displayHobbies(...hobbies) that logs all hobbies passed as arguments.
// function displayHobbies(...hobbies) {
//   for (const hobby of hobbies) {
//     console.log(hobby);
//   }
// }
// displayHobbies("Traveling", "Reading", "Gaming");

// Write a function showStudentDetails({ name, roll }) using object destructuring. Pass an object with those properties.
// function showStudentDetails({ name, roll }) {
//   console.log(`Name: ${name}, Roll: ${roll}`);
// }
// const details = { name: "Kiran", roll: 10 };
// showStudentDetails(details);

// Create a function calculateTotal([price1, price2, price3]) using array destructuring. Return the sum of all three prices.
// function calculateTotal([price1, price2, price3]) {
//   return price1 + price2 + price3;
// }
// const prices = [10, 20, 30];
// console.log(calculateTotal(prices));

// Build a function createAccount({ username, password = "1234" }). If password is not given, use default. Log both values.
// function createAccount({ username, password = "1234" }) {
//   console.log(`Username: ${username}, Password: ${password}`);
// }
// createAccount({ username: "Athul" });
// createAccount({ username: "Athul", password: "0209" });

// Create a program where a function is called before it's declared. Observe and explain if it works. (Function Hoisting)
// hoistedFunction();
// function hoistedFunction() {
//   console.log("Hoisted function");
// }

// Create a closure that stores a secret message and displays it only when a specific function is called.
// function secretMessage() {
//   const secret = "Secret message";
//   return function () {
//     console.log(secret);
//   };
// }
// const getSecret = secretMessage();
// getSecret();

// Build a counter function using closures that increases the count each time it's called.
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Write a nested function setup where the inner function accesses variables from its parent function.
// function outerFunction() {
//   const outerVariable = "Outer Function";
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   innerFunction();
// }
// outerFunction();

// Create a pure function that takes two numbers and returns their sum without using or modifying any global variable.
// function Sum(a, b) {
//   return a + b;
// }
// console.log(Sum(5, 10));

// Create a function that adds a tax rate to a product price using only pure function principles.
// function Tax(price, tax) {
//   return price + (price * tax);
// }
// console.log(Tax(100, 0.20));

// Convert a two-argument function (like addition or multiplication) into a curried version.
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(add(10)(5));

// Create a curried function where the first call takes a user role (like "Admin", "Student") and the second call takes a name, then prints a custom welcome message.
// function welcomeUser(role) {
//   return function (name) {
//     console.log(`Welcome ${role} ${name}`);
//   };
// }
// welcomeUser("Admin")("Kiran");
// welcomeUser("Student")("Athul");

// Write a function that returns another function. The inner function should access and use a variable from the outer function. (Closure + Lexical Scope)
// function outerFunction() {
//   const outerVariable = "Outer Variable";
//   return function () {
//     console.log(outerVariable);
//   };
// }
// const innerFunction = outerFunction();
// innerFunction();

// Create a function that gives a discount percentage first, and returns another function that accepts the price and prints the final price after discount. (Currying)
// function discount(percentage) {
//   return function (price) {
//     const finalPrice = price - (price * percentage) / 100;
//     console.log(`Final Price : ${finalPrice}`);
//   };
// }
// discount(10)(100);

// Write a program to find the area of a triangle using function
// function areaOfTriangle(base, height) {
//   return (base * height) / 2;
// }
// console.log(areaOfTriangle(10, 5));

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// SKIP

// Write a JavaScript function that checks whether a passed string is palindrome or not?
// function Palindrome(str) {
//   const rev = str.split("").reverse().join("");
//   return str === rev;
// }
// console.log(Palindrome("malayalam"));
// console.log(Palindrome("hey"));

// Write an anonymous function that takes two numbers as arguments and returns their product
// const product = function (a, b) {
//   return a * b;
// };
// console.log(product(5, 10));

// Create an arrow function that squares a given number.
// const square = (n) => n * n;
// console.log(square(5));

// Write a recursive function in JavaScript to calculate the nth Fibonacci number. The Fibonacci sequence is defined as follows: the first two numbers are 0 and 1, and each subsequent number is the sum of the two preceding ones.
// function fibonacci(n) {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// console.log(fibonacci(3));

// Create a Function to Convert Celsius to Fahrenheit using arrow function.
// const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
// console.log(celsiusToFahrenheit(10));

// // Create a Function to print Greeting Message using arrow function.
// const greet = (name) => `Welcome ${name}`;
// console.log(greet("Kiran"));