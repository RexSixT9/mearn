// Declarations and initialization
// In javascript, variables can be declared using var, let, or const. The choice of which to use depends on the scope and mutability of the variable.

// Var keyword: Variables declared with var are function-scoped and can be re-declared and updated. However, they are hoisted to the top of their scope, which can lead to unexpected behavior. Old way of declaring variables, not recommended for use in modern JavaScript. 

var fname = "Kiran";
console.log(fname);

// Let keyword: Variables declared with let are block-scoped and can be updated but not re-declared within the same scope. They are also hoisted, but not initialized.

let lname = "Karthik";
console.log(lname);

// Const keyword: Variables declared with const are block-scoped and cannot be updated or re-declared. They must be initialized at the time of declaration.

const age = 25;
console.log(age);