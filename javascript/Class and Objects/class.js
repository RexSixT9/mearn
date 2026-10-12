// This Keyword
// This Keyword is used to refer to the current object in a method. It can be used to access properties and methods of the current object.

// Class
// class Employee {
//   setEmployee(id, name, designation, salary, place) {
//     this.empId = id;
//     this.empName = name;
//     this.empDesignation = designation;
//     this.empSalary = salary;
//     this.empPlace = place;
//     console.log("Employee Created");
//   }
//   printEmployee() {
//     console.log(this.empId, this.empName, this.empDesignation, this.empSalary, this.empPlace);
//   }
// }

// emp = new Employee();
// emp.setEmployee(10, "Arun", "Designer", 15000, "Kochi");
// emp.printEmployee();

// emp1 = new Employee();
// emp1.setEmployee(11, "Rahul", "Developer", 20000, "Kannur");
// emp1.printEmployee();

// Example Task
// class Student {
//   setStudent(rollno, name, mark, grade) {
//     this.rollno = rollno;
//     this.name = name;
//     this.mark = mark;
//     this.grade = grade;
//     console.log("Student Created");
//   }
//   printStudent() {
//     console.log("Student Details: ", this.rollno, this.name, this.mark, this.grade);
//   }
// }

// st = new Student();
// st.setStudent(1, "Arun", 90, "A");
// st.printStudent();

// Constructor
// A constructor is a special method that is called when an object is created. It is used to initialize the properties of the object. In JavaScript, the constructor method is defined using the `constructor` keyword.

// class Employee {
//   constructor(id, name, designation, salary) {
//     this.empId = id;
//     this.empName = name;
//     this.empDesignation = designation;
//     this.salary = salary;
//   }
//   printEmployee() {
//     console.log(
//       "Employee Details: ",
//       this.empId,
//       this.empName,
//       this.empDesignation,
//       this.salary,
//     );
//   }
// }

// emp = new Employee(1, "Suresh", "Manager", 40000);
// emp.printEmployee();

// // Example Task
// class Bank {
//   constructor(accno, name, balance, phone) {
//     this.accno = accno;
//     this.name = name;
//     this.balance = balance;
//     this.phone = phone;
//     console.log(`Account created for user ${name}`);
//   }
//   deposit(amount) {
//     this.balance = this.balance + amount;
//     console.log(`${amount} credicted.`);
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Transation Failed");
//     } else {
//       this.balance = this.balance - amount;
//       console.log(`${amount} debited.`);
//     }
//   }
//   balanceEnquiry() {
//     console.log("Balance: ", this.balance);
//   }
// }

// b = new Bank(1225, "Karthik", 500, 9876543210);
// b.deposit(500);
// b.balanceEnquiry();
// b.withdraw(200);
// b.balanceEnquiry();
// b.withdraw(1500);
// b.balanceEnquiry();

// Example Task
// db = {
//   1000: {
//     acno: 1000,
//     username: "Neer",
//     password: 1000,
//     balance: 5000,
//     transaction: [],
//   },
//   1001: {
//     acno: 1001,
//     username: "Laisha",
//     password: 1001,
//     balance: 5000,
//     transaction: [],
//   },
//   1002: {
//     acno: 1002,
//     username: "Vyom",
//     password: 1002,
//     balance: 3000,
//     transaction: [],
//   },
// };

//1 create a function for validate account number. To validate account check if account number in db return true otherwise return false
// function validate(acno) {
//   if (acno in db) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(validate(1002));

// //2 create a function for authenticate user using account number and password if both are in db then print 'access granted' otherwise print 'permission denied' authenticated(acno,pswd)?access granted else permission denied.
// function authenticate(acno, pswd) {
//   if (validate(acno)) {
//     actualPswd = db[acno]["password"];
//     if (pswd == actualPswd) {
//       console.log("Access Granted");
//     } else {
//       console.log("Permission Denied");
//     }
//   } else {
//     console.log("Account not found");
//   }
// }
// authenticate(1002, 1032);
// authenticate(1002, 1002);

// //3 getBalance(acno) {}
// function getBalance(acno) {
//   if (acno in db) {
//     console.log("Balance: ", db[acno]["balance"]);
//   } else {
//     console.log("Account not found");
//   }
// }

function fundTranser(fromacno, toacno, amount) {
  if (validateUser(fromacno) && validateUser(toacno)) {
    if (db[fromacno].balance >= amount) {
      db[fromacno].balance -= amount;
      db[toacno].balance += amount;
      console.log("Transation Completed.");
    } else {
      console.log("Insufficent Fund.");
    }
  } else {
    console.log("Account not Found");
  }
}

// SAME QN WITH CLASS AND OBJECTS
class Bank {
  db = {
    1000: {
      acno: 1000,
      username: "Neer",
      password: 1000,
      balance: 5000,
      transaction: [],
    },
    1001: {
      acno: 1001,
      username: "Laisha",
      password: 1001,
      balance: 5000,
      transaction: [],
    },
    1002: {
      acno: 1002,
      username: "Vyom",
      password: 1002,
      balance: 5000,
      transaction: [],
    },
  };
  validateUser(acno) {
    if (acno in this.db) {
      return true;
    } else {
      return false;
    }
  }
  authenticateUser(acno, pswd) {
    if (this.validateUser(acno)) {
      if (pswd === this.db[acno].password) {
        console.log("Access Granted");
      } else {
        console.log("Permission Denied");
      }
    } else {
      console.log("Account not found");
    }
  }
  getBalance(acno) {
    if (acno in this.db) {
      console.log("Balance: ", this.db[acno]["balance"]);
    } else {
      console.log("Account not found");
    }
  }
  fundTranser(fromacno, toacno, amount) {
    if (this.validateUser(fromacno) && this.validateUser(toacno)) {
      if (this.db[fromacno].balance >= amount) {
        this.db[fromacno].balance -= amount;
        this.db[toacno].balance += amount;
        console.log("Transation Completed.");
      } else {
        console.log("Insufficent Fund.");
      }
    } else {
      console.log("Account not Found");
    }
  }
}

b = new Bank();
console.log(b.validateUser(1001));
b.authenticateUser(1001, 1001);
b.getBalance(1001);
b.fundTranser(1001, 1002, 2000);
b.getBalance(1001);
b.getBalance(1002);
b.fundTranser(1001, 1002, 4000);
b.getBalance(1001);
b.getBalance(1002);
