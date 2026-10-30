// Promise is a good way to handle asynchronous operations in JavaScript. A Promise represents a value that may be available now, or in the future, or never. It has three states: pending, fulfilled, and rejected. It is used to find out if the asynchronous operation was successful or not.

// const count = false;
// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value");
//   } else {
//     reject("There is no count value");
//   }
// });

// console.log(countValue);

var pro = new Promise(function (resolve, reject) {
  let lotnum = 1;
  let prizeNum = Math.floor(Math.random() * 10);
  if (lotnum === prizeNum) {
    resolve("You won the Lottery");
  } else {
    reject("Better luck next time.");
  }
});

pro.then((msg) => console.log(msg)).catch((err) => console.log(err));

// then() Method - this method is used with the callback when the primise is successfully fulfilled or resolved. We can use multiple then() methods with the promise.

// catch() Method - this method is used with the callback when the promise is rejected or an error occurs.
