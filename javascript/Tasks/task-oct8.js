// TASK-1

//[id,name,designation,location,salary,experience]
employee = [
  [1000, "Neel", "Developer", "Kochi", 25000, 3],
  [1001, "Max", "Tester", "TVM", 20000, 2],
  [1002, "Vinod", "QA", "KNR", 35000, 4],
  [1003, "Vyom", "QA", "Kochi", 45000, 5],
  [1004, "Laisha", "Tester", "TVM", 55000, 7],
  [1005, "Aahan", "Developer", "TVM", 15000, 1],
  [1006, "Aahil", "QA", "Kochi", 25000, 3],
  [1007, "Shayan", "Developer", "KNR", 30000, 3],
  [1000, "Nihaan", "Developer", "Kochi", 25000, 3],
];

//1 Print all employee name
console.log("All employee names:");
employee.forEach((e) => console.log(e[1]));

//2 Print total number of employee
console.log("Total number of employee:");
console.log(employee.length);

//3 Print developer employee details
console.log("Developer employee details:");
employee.forEach((e) => {
  if (e[2] === "Developer") {
    console.log(e);
  }
});

//4 Print all employee details whose salary > 30000
console.log("Employee details with salary > 30000:");
employee.forEach((e) => {
  if (e[4] > 30000) {
    console.log(e);
  }
});

//5 Print details of employee Laisha
console.log("Details of employee Laisha:");
employee.forEach((e) => {
  if (e[1] === "Laisha") {
    console.log(e);
  }
});

//6 Sort employee based on descending order of salary
console.log("Sorted Employee based on descending order of salary:");
employee.sort((a, b) => b[4] - a[4]);
employee.forEach((e) => console.log(e));

//7 sort employee based on ascending order of experience
console.log("Sorted Employee based on ascending order of experience:");
employee.sort((a, b) => a[5] - b[5]);
employee.forEach((e) => console.log(e));

// TASK-2

// Can you demonstrate how to use the filter() method to create a new array of even numbers from an existing array of integers?
var num = [1, 2, 3, 4, 5, 6];
var evenNumbers = num.filter((n) => n % 2 === 0);
console.log(evenNumbers);

// Can you provide an example of using the map() method to double each element in an array of numbers?
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((n) => n * 2));

// Can you demonstrate how to use the map() method to extract specific properties from an array of objects?
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 28 },
];
console.log(people.map((p) => p.name));

// TASK-3
// [no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
  [1, "Eranakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Idukki", 14000, 3000, 25000, 30000, 1000],
  [3, "Thrissur", 24000, 4000, 33000, 24000, 2500],
  [4, "Pathanamthitta", 20000, 2000, 45000, 22000, 1500],
  [5, "Kozhikode", 44000, 5000, 12000, 21000, 500],
  [6, "Kottayam", 27000, 1500, 27000, 14000, 1000],
  [7, "Kollam", 14000, 2500, 25000, 18000, 2700],
];

//1. Find which district having highest +ve case?
console.log(covid_data.reduce((a, b) => (a[2] > b[2] ? a : b))[1]);

//2. Find which district having highest 1st dose vaccine?
console.log(covid_data.reduce((a, b) => (a[5] > b[5] ? a : b))[1]);

//3. Find which district having lowest death rate?
console.log(covid_data.reduce((a, b) => (a[3] < b[3] ? a : b))[1]);

//4. Sort the data with +ve case in desending order
console.log(covid_data.sort((a, b) => b[2] - a[2]));

//5. sort district with 1st dose vaccine
console.log(covid_data.sort((a, b) => b[5] - a[5]));

//6. print total number of curred cases
console.log(covid_data.reduce((a, b) => a[4] + b[4], 0));

//7. print total curred cases in Idukki
console.log(covid_data.find((a) => a[1] === "Idukki")[4]);

//8. Is any district having more than 27000 +ve cases
console.log(covid_data.some((a) => a[2] > 27000));
