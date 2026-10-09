// ARRAY OBJECTS
// var emp = {
//   id: 1000,
//   name: "Arun",
//   Designation: "Developer",
//   Salary: 15000,
// };

// // Fetch Salary
// console.log(emp.Salary);
// console.log(emp["Salary"]);

// // To check whether a property exists in an object or not
// console.log("Salary" in emp);

// // To add a new property to an object
// emp.name = "Kiran";
// console.log(emp.name);

// emp.IsExperienced = true;
// console.log(emp.IsExperienced);

// // for in loop
// for (let k in emp) {
//   console.log(k + ": " + emp[k]);
// }

// Example Task
// var car = {
//   name: "Honda City",
//   model: "sedan",
//   manufacturer: "Honda",
//   price: "1400000",
// };

// //1 Display manufacturer information for the car
// console.log("Manufacturer:", car.manufacturer);

// //2 Check whether the model is present or not
// console.log("model" in car);

// //3 Add property varient
// car["varient"] = ["Top"];
// car["varient"].push("Base");
// console.log(car);

// //4 Add property colour
// car.property = ["Red", "Black", "White"];
// console.log(car);

// Example Task 2
// Count the number of word count in a string
// var text = "one two one two";

// var words = text.split(" ");
// var wordCount = {};
// words.map((w) => (w in wordCount ? (wordCount[w] += 1) : (wordCount[w] = 1)));
// console.log(wordCount);

// // Count the number of same element from array
// var num = [10, 20, 30, 10, 20, 30, 40];
// var numCount = {};
// num.map((n) => (n in numCount ? (numCount[n] += 1) : (numCount[n] = 1)));
// console.log(numCount);

// Example Task
// products = [
//   { pid: 100, pname: "apple", band: "5G", price: 120000, display: "led" },
//   { pid: 101, pname: "samsung", band: "5G", price: 45000, display: "led" },
//   { pid: 102, pname: "blackberry", band: "4G", price: 50000, display: "led" },
//   { pid: 103, pname: "nokia", band: "3G", price: 1200, display: "lcd" },
//   { pid: 104, pname: "motorola", band: "4G", price: 10000, display: "lcd" },
// ];

// //1. print product name only
// console.log("Produc name:");
// products.forEach((d) => console.log(d.pname));

// //2. print all mobile details whose display is lcd
// console.log("LCD Display:");
// products.forEach((d) => d.display == "lcd" && console.log(d));

// //3. print 5G mobile phone name
// console.log("5G Phones:");
// products.forEach((d) => d.band == "5G" && console.log(d));

// //4. sort mobile based on price
// console.log("Sorted based on price:");
// products.sort((a, b) => a.price - b.price).forEach((d) => console.log(d));

// //5. print costly mobile
// var costly = products.reduce((a, b) => (a.price > b.price ? a : b));
// console.log("Costly Mobile:", costly);

// //6. print low cost mobile
// var lowCost = products.reduce((a, b) => (a.price < b.price ? a : b));
// console.log("Low Cost:", lowCost);

// Example Task
// Need to display the largest temperature from each district
// weatherdata = [
//   { district: "Thrissur", weather: 28 },
//   { district: "Palakkad", weather: 36 },
//   { district: "Kozhikode", weather: 28 },
//   { district: "Thrissur", weather: 29 },
//   { district: "Palakkad", weather: 31 },
//   { district: "Kozhikode", weather: 34 },
// ];

// output = {};

// for (let data of weatherdata) {
//   let dist = data.district;
//   let currentTemp = data.weather;
//   if (dist in output) {
//     let oldTemp = output[dist];
//     if (currentTemp > oldTemp) {
//       output[dist] = currentTemp;
//     }
//   } else {
//     output[dist] = currentTemp;
//   }
// }

// console.log(output);

// // Array Objects of Entries
// console.log(Object.entries(output));

// First Recursive Characters
// pattern = "asdfewsasd";
// out = {};

// for (let char of pattern) {
//   if (char in out) {
//     console.log("First Recursive Character is:", char);
//     break;
//   } else {
//     out[char] = 1;
//   }
// }

// Spread Operator

