// Functions: A function is a block of code that performs a specific task. It can take input values (parameters) and return a result.

// function add(a, b) {
//     c  = a + b;
//     return c;
// }

// function addition(a, b) {
//     console.log(a+b);
// }
// addition(10, 20)
// console.log(add(20, 20));

// Function with conditional statements: Functions can include conditional statements to perform different actions based on certain conditions.

// function sub(a, b) {
//   return a > b ? a - b : 0;
// }
// console.log(sub(20, 10));
// console.log(sub(10, 20));

// Cube of number
// function cube(n){
//     return n * n * n;
// }
// console.log(cube(5));

// Check a number is odd or even
// function oddOrEven(n) {
//   if (n % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// function oddEven(n) {
//   return n % 2 == 0 ? "Even" : "Odd";
// }
// console.log(oddOrEven(5));
// console.log(oddEven(8));

// // Arrow Function
// const add = (a, b) => a + b;
// console.log(add(10, 20));

// Higer Order Function: A higher-order function is a function that takes another function as an argument or returns a function as its result. Higher-order functions are commonly used in JavaScript for tasks such as mapping, filtering, and reducing arrays.
// SetTimeout and SetInterval are also examples of higher-order functions.

// const square  = (n) => n * n;
// function cube(n, square) {
//   return n * square(n);
// }
// console.log(cube(5, square));

//SetInterval and SetTimeout

// function sayHello() {
//   console.log("Hello");
// }
// function sayMyName() {
//   console.log("Akshay");
// }
// setInterval(sayHello, 1000);
// setTimeout(sayMyName, 3000);

// Types of Functional Parameters:
// 1. Default Parameters
// 2. Rest Parameters
// 3. Destructuring Parameters
// 4. Required Parameters

// Default Parameters - Parameters that have a default value if no argument is passed.
// function discount(val = 10) {
//   console.log("Discount is: " + val + "%");
// }
// discount();

// Required Parameters - Parameters that must be provided when calling a function. If a required parameter is not provided, the function will throw an error or return undefined.
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(10, 20));

// Rest Parameters - A rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) followed by the parameter name.
// function max(...num){
//   return Math.max(...num);
// }
// console.log(max(5, 10, 15, 20, 25));

// Destructuring Parameters - Destructuring allows you to extract values from arrays or properties from objects and assign them to variables. In function parameters, destructuring can be used to directly extract values from an object or array passed as an argument.
// function printDetails({ id, name, batch }) {
//   console.log(id, name, batch);
// }
// const details = {
//   id: 10,
//   name: "Akshay",
//   batch: "MEARN",
// };
// printDetails(details);

// // Array Destructuring in function parameters
// function days([sun, mon, tue, wed, thu, fri, sat]) {
//   console.log(sun, mon, tue, wed, thu, fri, sat);
// }
// week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// days(week);

// Function Hoisting: In JavaScript, function declarations are hoisted to the top of their containing scope. This means that you can call a function before it is defined in the code. However, function expressions and arrow functions are not hoisted in the same way, so they must be defined before they are called.
