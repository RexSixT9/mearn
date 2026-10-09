// TASK-1
// [id,name,price,stock]
products = [
  [1, "Hide and seek", 50, 20],
  [2, "lays", 20, 80],
  [3, "oreo", 40, 100],
  [4, "parleG", 25, 10],
  [5, "tiger", 20, 0],
  [6, "unibic", 60, 20],
  [7, "good day", 70, 20],
];

//1. Display all products name
console.log("All products names:");
products.map((p) => console.log(p[1]));

//2. Display list of products under 50rs
console.log("Products under 50rs:");
products.filter((p) => p[2] < 50).map((p) => console.log(p[1]));

//3. Print details of 'oreo' product
console.log("Details of 'oreo' product:");
products.filter((p) => p[1] === "oreo").map((p) => console.log(p));

//4. Display most coslty product details
console.log("Most costly product details:", products.reduce((a, b) => (a[2] > b[2] ? a : b)));

//5. Display out of stock product details
console.log("Out of stock product details:");
products.filter((p) => p[3] === 0).map((p) => console.log(p));

//6. Display print details of 4th product
console.log("Details of 4th product:", products[3]);

//7. sort products details based on product availability stock by desending
console.log("Products sorted by availability of stock:");
products.sort((a, b) => b[3] - a[3]).map((p) => console.log(p));

//8. Display products having maximum availabile stock
console.log("Products having maximum available stock:", products.reduce((a, b) => (a[3] > b[3] ? a : b)));

//9. Display products having minimum availabile stock
console.log("Products having minimum available stock:", products.reduce((a, b) => (a[3] < b[3] ? a : b)));

//10. Sort the products based on rate by ascending order
console.log("Products sorted by rate (ascending):", products.reduce((a, b) => (a[2] < b[2] ? a : b)));

// TASK-2
// [rollno, name, class, markofmaths, markofphy,markofchem]
arr = [
  [1, "manu", 12, 45, 65, 70],
  [2, "amal", 10, 67, 86, 75],
  [3, "sara", 12, 86, 87, 90],
  [4, "vimal", 10, 86, 56, 93],
  [5, "shaju", 12, 56, 61, 70],
  [6, "kavita", 10, 55, 56, 60],
];

//1 sort the student in descending order of markofmaths
console.log("Students in descending order of markofmaths:");
arr.sort((a, b) => b[3] - a[3]).map((s) => console.log(s));

//2 find all students who are in class 10th
console.log("Students in class 10th:");
arr.filter((s) => s[2] === 10).map((s) => console.log(s));

//3 print the names of all students
console.log("Names of all students:", arr.map((s) => s[1]));

//4 print the details of kavita
console.log("Details of kavita:", arr.filter((s) => s[1] === "kavita"));

//5 print 1st student who has least mark in physics
console.log("1st student with least mark in physics:", arr.reduceRight((a, b) => (a[4] < b[4] ? a : b)));

//6 Find which student have highest mark in Chemistry
console.log("Student with highest mark in Chemistry:", arr.reduce((a, b) => (a[5] > b[5] ? a : b)));

//7 Is amal is present or not?
console.log("Is amal present or not?", arr.filter((s) => s[1] === "amal").length > 0);

//8 print all marks in physics
console.log("All marks in physics:", arr.map((s) => s[4]));

//9 Display only 10th std students names one by one
console.log("10th std students names:");
arr.filter((s) => s[2] === 10).forEach((s) => console.log(s[1]));

//10 Is there any student who are studing in 11th std?
console.log("Is there any student who are studying in 11th std?", arr.filter((s) => s[2] === 11));

// TASK-3
const countries = [
  { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
  { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
  { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
  { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
  { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
];

// 1. Print the names of all countries.
console.log("Names of all countries:");
countries.forEach((country) => console.log(country.name));

// 2. Find the country with the largest population.
console.log("Country with the largest population:", countries.reduce((a, b) => (a.population > b.population ? a : b)));

// 3. Find the total population of all countries.
console.log("Total population of all countries:", countries.reduce((a, b) => a.population + b.population, 0));

// 4. Find all countries in a specific continent (e.g., Asia).
console.log("Countries in Asia:");
countries.filter((country) => country.continent === 'Asia').forEach((country) => console.log(country.name));

// 5. Print the names of capitals with more than one city.
console.log(countries.filter((c)=>c.capital.includes(',')))

// 6. Sort countries based on population (descending order).
console.log("Countries sorted by population (descending):");
countries.sort((a, b) => b.population - a.population).forEach((country) => console.log(country.name));

// 7. Find the country with the smallest population.
console.log("Country with the smallest population:", countries.reduce((a, b) => (a.population < b.population ? a : b)));

// 8. Find the country with the longest name.
console.log(countries.filter((c)=>c.name.length > ))

// 9. Find the country with the shortest name.
console.log(countries.filter((c)=>))

// 10. Find the average population of all countries.
// Pending