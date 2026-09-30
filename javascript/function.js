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

const square  = (n) => n * n;
function cube(n, square) {
  return n * square(n);
}
console.log(cube(5, square));