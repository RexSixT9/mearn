// Declarations and initialization
// In javascript, variables can be declared using var, let, or const. The choice of which to use depends on the scope and mutability of the variable.

// Var keyword: Variables declared with var are function-scoped and can be re-declared and updated. However, they are hoisted to the top of their scope, which can lead to unexpected behavior. Old way of declaring variables, not recommended for use in modern JavaScript. 

// var fname = "Kiran";
// console.log(fname);

// // Let keyword: Variables declared with let are block-scoped and can be updated but not re-declared within the same scope. They are also hoisted, but not initialized.

// let lname = "Karthik";
// console.log(lname);

// // Const keyword: Variables declared with const are block-scoped and cannot be updated or re-declared. They must be initialized at the time of declaration.

// const age = 25;
// console.log(age);

// // Variable Hoisting: In JavaScript, variable declarations are hoisted to the top of their scope. This means that you can use a variable before it is declared, but it will be undefined until the declaration is reached.

// console.log(a);
// var a  = undefined;
// var a = 10;

// Symbols: Symbols are a new primitive type introduced in ES6. They are unique and immutable, and can be used as keys for object properties.

// let sym1 = Symbol('foo');
// let sym2 = Symbol('foo');
// console.log(sym1 === sym2); // false, because each symbol is unique