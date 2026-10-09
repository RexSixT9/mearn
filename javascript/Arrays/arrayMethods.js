// // Sort Method
// // The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// var arr = [5, 2, 9, 1, 5, 6];
// console.log(
//   "Ascending:",
//   arr.sort((n1, n2) => n1 - n2),
// ); // Sorts the array in ascending order
// console.log(
//   "Descending:",
//   arr.sort((n1, n2) => n2 - n1),
// ); // Sorts the array in descending order

// Sort of strings
// var vehicles = ["car", "bike", "bus", "train"];
// console.log(vehicles.sort());
// console.log(vehicles.sort().reverse());

// // Map Method
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// console.log(
//   "Squared:",
//   arr.map((n) => n ** 2),
// );

// // Return a new array with all the element values multiplied by 10
// console.log(
//   "Multiplied by 10:",
//   arr.map((n) => n * 10),
// );

// // Return a new array with square root of all the element values
// var arr = [1, 4, 9, 16, 25];
// console.log(
//   "Square root:",
//   arr.map((n) => Math.sqrt(n)),
// );

// // Filter Method
// // The filter() method creates a new array with all elements that pass the test implemented by the provided function. It returns a new array containing only the elements that satisfy the condition specified in the callback function.

// // Return a new array with all the even numbers from the original array
// var arr = [1, 2, 3, 4, 5, 6];
// console.log(
//   "Even numbers:",
//   arr.filter((n) => n % 2 === 0),
// );

// // Return a new array with ages greater than or equal to 18 from the array
// var ages = [12, 17, 8, 21, 14, 19];
// console.log(
//   "Ages >= 18:",
//   ages.filter((age) => age >= 18),
// );

// // [id,name,price,stock]
// products = [
//   [1, "Hide and seek", 50, 20],
//   [2, "lays", 20, 80],
//   [3, "oreo", 40, 100],
//   [4, "parleG", 25, 10],
//   [5, "tiger", 20, 0],
//   [6, "unibic", 60, 20],
//   [7, "good day", 70, 20],
// ];

// // Display product name one by one
// // for (let i = 0; i < products.length; i++) {
// //   console.log(products[i][1]);
// // }
// products.forEach((p) => console.log(p[1]));

// // Print price of each item
// products.forEach((p) => console.log(p[1], "-", p[2]));

// OCT - 7
// [id,name,designation,location,salary,experience]
// employee = [
//   [1000, "Neel", "Developer", "Kochi", 25000, 3],
//   [1001, "Max", "Tester", "TVM", 20000, 2],
//   [1002, "Vinod", "QA", "KNR", 35000, 4],
//   [1003, "Vyom", "QA", "Kochi", 45000, 5],
//   [1004, "Laisha", "Tester", "TVM", 55000, 7],
//   [1005, "Aahan", "Developer", "TVM", 15000, 1],
//   [1006, "Aahil", "QA", "Kochi", 25000, 3],
//   [1007, "Shayan", "Developer", "KNR", 30000, 3],
//   [1000, "Nihaan", "Developer", "Kochi", 15000, 1],
// ];

// Find Method
// The find() method returns the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

// Find the details of employee with the name "Laisha"
// console.log(
//   "Employee with name Laisha:",
//   employee.find((e) => e[1] === "Laisha"),
// );

// Reduce Method
// This method executes a reducer function on each element of the array, resulting in a single output value.

// var arr = [1, 2, 3, 4, 5];

// // Sum of elements in the array
// console.log(
//   "Sum of elements:",
//   arr.reduce((n1, n2) => n1 + n2, 0),
// );

// // Largest element in the array
// console.log(
//   "Largest element:",
//   arr.reduce((n1, n2) => (n1 > n2 ? n1 : n2)),
// );

// // Smallest element in the array
// console.log(
//   "Smallest element:",
//   arr.reduce((n1, n2) => (n1 < n2 ? n1 : n2)),
// );

// ReduceRight Method
//
// var markDetails = [
//   [1, "Alice", 85],
//   [2, "Bob", 95],
//   [3, "Charlie", 78],
//   [4, "David", 95],
//   [5, "Eve", 88],
// ];

// // The one with the least marks
// console.log(
//   "Employee with least marks:",
//   markDetails.reduce((e1, e2) => (e1[2] < e2[2] ? e1 : e2)),
// );
// console.log(
//   "Employee with least marks:",
//   markDetails.reduceRight((e1, e2) => (e1[2] < e2[2] ? e1 : e2)),
// );

// var numbers = [4, 48, 16, 89, 58, 69];
// // Normal Sort
// console.log("Sort:", numbers.sort());
// // Ascending
// console.log(
//   "Ascending Order:",
//   numbers.sort((n1, n2) => n1 - n2),
// );
// // Lowest Number
// var lowest = numbers.sort((n1, n2) => (n1 < n2 ? n1 : n2));
// console.log("Lowest Number", lowest[0]);

// Includes Method
// Return true if the element is present in the array, else return false
// var names = ["Kiran", "Arun", "Manu"];
// console.log(names.includes("Kiran"));
// console.log(names.includes("kiran"));

// Some Method
// Return true if at least one element in the array satisfies the provided testing function, else return false
// [id, name,price,stock]
// products = [
//   [1, "Hide and seek", 50, 20],
//   [2, "lays", 20, 80],
//   [3, "oreo", 40, 100],
//   [4, "parleG", 25, 10],
//   [5, "tiger", 20, 0],
//   [6, "unibic", 60, 20],
//   [7, "good day", 70, 20],
// ];

// // 1 Is there any product with price > 20
// console.log(products.some((item) => item[2] > 20));

// // 2 Is there any product with available stock is > 90
// console.log(products.some((item) => item[3] > 90));

// // 3 Is there any product with available in the range of 10 to 20
// console.log(products.some((item) => item[3] > 10 && item[3] < 20));

// // 4 print all product name available in the range of 20 to 40
// products
//   .filter((item) => item[2] >= 20 && item[2] <= 40)
//   .forEach((item) => console.log(item[1]));

// Split Method
// The split() method splits a string into an array of substrings based on a specified separator and returns the new array. If the separator is not found in the string, the entire string is returned as a single element in the array.

// var str = "Luminar";
// console.log(str.split(""));
// console.log(str.split(","));
// console.log(str.split("", 4));

// var sent = "This is a long sentence with many words";
// console.log(sent.split(" ", 4));

// Flat Method
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It flattens nested arrays into a single-level array.

// var a = [
//   [30, 49, 20],
//   [13, 9, 2],
// ];
// console.log(a.flat());
// console.log(a.flat().filter((n) => n < 10));

// // Infinite Depth Flattening
// var a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// console.log(a.flat(Infinity));

// // From Method
// console.log(Array.from("Arun"));

// Array.from("Luminar")
//   .map((s) => s.toUpperCase())
//   .forEach((i) => console.log(i));

// var str = "Hai Hello";
// var vowels = ["a", "e", "i", "o", "u"];

// // Find the vowels in the string
// Array.from(str)
//   .filter((s) => vowels.includes(s))
//   .forEach((item) => console.log(item));
// if (dist in output) {
//     let newTemp = output[dist];
//     if (oldTemp > newTemp) {
//       output[dist] = oldTemp;
//     }
//   } else {
//     output[dist] = oldTemp;
//   }