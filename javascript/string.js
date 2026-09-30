// Strings in JavaScript are immutable, meaning that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.
// Double quotes and single quotes are used to define string literals in JavaScript. Template literals, defined using backticks (`), allow for multi-line strings and string interpolation.
// let hey = "Hello Guyssss";
// let heyy = `Hello Guyssss`;
// console.log(hey);
// console.log(heyy);

// Escape Characters: Special characters can be included in strings using escape sequences. For example, \n represents a new line, and \t represents a tab.
// let hey1 = "hey \n Guyssss";
// let hey2 = "hey \t Guyssss";
// let hey3 = "hey \"Guyssss\"";
// console.log(hey1);
// console.log(hey2);
// console.log(hey3);

// Type Casting: JavaScript automatically converts values to strings when necessary. For example, when concatenating a string with a number, the number is converted to a string. 
// let typeCasting = 5;
// let typeCasting1 = typeCasting.toString();
// let typeCasting2 = String(typeCasting);
// let typeCasting3 = Number(typeCasting1);

// console.log(typeCasting);
// console.log(typeCasting1);
// console.log(typeCasting2);
// console.log(typeCasting3);

// String Methods: JavaScript provides a variety of built-in methods for manipulating strings. Some common methods include:
// let sname  = "Arun Kumar";
// console.log(sname.length);
// console.log(sname.toUpperCase());
// console.log(sname.toLowerCase());

// let companyName = "Luminar";
// console.log(companyName.length);
// console.log(companyName[companyName.length - 1]);
// console.log(companyName.charAt(companyName.length - 1));
// console.log(companyName.replace("r", "rrrrr"));

const fName = "Akshay"
const mName = "Kumar"
const lName = "Singh"
const fullName = fName.concat(mName, lName)
console.log(fullName);