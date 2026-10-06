// //array creation
// // var vehicle=[]; //declaration
// var vehicle = ["car","bus","bike","plane",200000,567000] ; //initilization

// //1 To fetch an item from an array
// console.log(vehicle[0]);

// //2 To find the length of the array
// console.log(vehicle.length);

// //3 Fetch every element of the array
// console.log(vehicle);

// //4 To insert a new element in an array
// vehicle.push("5000");
// console.log(vehicle);
// // Or
// vehicle[vehicle.length] = "10000";
// console.log(vehicle);

// //5 To get index position of values stored in an array

// //6 Fetch one by one elements of the array
// for(var i=0;i<vehicle.length;i++){
//     console.log(vehicle[i]);
// }

// 5 - Oct - 2026

//To hold an expenses , and
//Find total expense
//Find maximum expense
//Find minimum expense

// var expenses = [12000, 20000, 34000, 10000, 28000, 15000, 50000];
// var total = 0;

// // Find the total expense
// for (var i = 0; i < expenses.length; i++) {
//   total += expenses[i];
// }
// console.log("Total expense:", total);

// // Find the maximum expense
// var maxExpense = expenses[0];
// for (let i of expenses) {
//   if (i > maxExpense) {
//     maxExpense = i;
//   }
// }
// console.log("Maximum expense:", maxExpense);

// //  Find the minimum expense
// var minExpense = expenses[0];
// for (let i of expenses) {
//   if (i < minExpense) {
//     minExpense = i;
//   }
// }
// console.log("Minimum expense:", minExpense);

// Generate new array with values are subtracted from the total sum of the values
// var arr = [4, 5, 6];
// var total = 15;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = total - arr[i];
// }
// console.log(arr);

// var arr = [10, 20, 30, 40, 50];
// const elem = 32;
// flag = 0;
// for (let i of arr) {
//   if (i === elem) {
//     flag = 1;
//     break;
//   }
// }
// console.log(flag === 1 ? "Number found" : "Number Not Found");

// var arr = [2,3,4,5];
// for(let i of arr){
//     for(let j of arr){
//         if (i+j==9){
//             console.log(`Pairs are ${i} and ${j}`);
//         }
//     }
// }

//Nested Array
//print all elements, whose values are less than 10 in given array
// a = [
//   [1, 2],
//   [10, 22],
//   [14, 21],
//   [3, 6],
//   [5, 9],
//   [19, 28],
// ];

// for (let i of a) {
//   for (let j of i) {
//     if (j < 10) {
//       console.log(j);
//     }
//   }
// }

// //[id,name,designation,location,salary,experience]
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
console.log("Employee Names:");
for (let emp of employee) {
  console.log(emp[1]);
}

//2 Print total number of employee
console.log("Total Number of Employees: ",employee.length);

//3 Print developer employee details
console.log("Developer Employee Details:");
for (let dev of employee){
    if (dev[2] === "Developer"){
        console.log(dev);   
    }
}

//4 Print all employee details whose salary > 30000
console.log("Employee Details whose salary > 30000:");
for( let emp2 of employee){
    if (emp2[4] > 30000 ){
        console.log(emp2);
    }
}

//5 Print details of employee Laisha
for (let emp3 of employee){
    if (emp3[1] == "Laisha"){
        console.log("Details of Laisha:",emp3);
    }
}

//6 Sort employee based on descending order of salary
employee.sort((a,b) => b[4]-a[4]);
console.log("Employee based on descending order of salary:",employee);

//7 sort employee based on ascending order of experience
employee.sort((a,b) => a[5]-b[5]);
console.log("Employee based on ascending order of experience:",employee);