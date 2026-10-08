// ARRAY OBJECTS
var emp = {
  id: 1000,
  name: "Arun",
  Designation: "Developer",
  Salary: 15000,
};

// Fetch Salary
console.log(emp.Salary);
console.log(emp["Salary"]);

// To check whether a property exists in an object or not
console.log("Salary" in emp);