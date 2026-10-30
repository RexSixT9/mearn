// TASK
accounts = [
  {
    acno: 1000,
    actype: "savings",
    balance: 45000,
    transaction: [
      {
        to: 1001,
        amount: 6000,
        msg: "ebil",
        mode: "gpay",
      },
      {
        to: 1002,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1003,
        amount: 1000,
        msg: "recharge",
        mode: "phonepe",
      },
    ],
  },
  {
    acno: 1001,
    actype: "current",
    balance: 30000,
    transaction: [
      {
        to: 1000,
        amount: 1000,
        msg: "grossary",
        mode: "gpay",
      },
      {
        to: 1001,
        amount: 5000,
        msg: "ebil",
        mode: "gpay",
      },
      {
        to: 1002,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1003,
        amount: 1000,
        msg: "recharge",
        mode: "phonepe",
      },
    ],
  },
  {
    acno: 1002,
    actype: "fixed",
    balance: 100000,
    transaction: [
      {
        to: 1000,
        amount: 5000,
        msg: "ebil",
        mode: "gpay",
      },
      {
        to: 1001,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1003,
        amount: 1000,
        msg: "recharge",
        mode: "phonepe",
      },
    ],
  },
  {
    acno: 1003,
    actype: "savings",
    balance: 30000,
    transaction: [
      {
        to: 1001,
        amount: 7000,
        msg: "ebil",
        mode: "gpay",
      },
      {
        to: 1002,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1000,
        amount: 1000,
        msg: "recharge",
        mode: "phonepe",
      },
    ],
  },
];

//1 total number of accounts
console.log("Total number of accounts:", accounts.length);

//2 print account number whose account type is savings
console.log("Account numbers of savings accounts:", accounts.filter((a) => a.actype === "savings").map((a) => a.acno));

//3 print the balance of account number 1000
console.log("Balance of account number 1000:", accounts.find((a) => a.acno === 1000).balance);

//4 print all gpay transactions
console.log("All gpay transactions:", accounts.map((a) => a.transaction.filter((t) => t.mode === "gpay")));
accounts.forEach((a) => {
  const gpayTransactions = a.transaction.filter((t) => t.mode === "gpay");
  if (gpayTransactions.length > 0) {
    console.log(`Gpay transactions for account ${a.acno}:`, gpayTransactions);
  }
});
//5 print all transactions whose amount > 5000
console.log("Transactions whose amount is greater than 5000:", accounts.map((a) => a.transaction.filter((t) => t.amount > 5000)));

//6 print all credit transactions of account 1002

//7 print all debit transactions of account 1002

//8 print the highest balance account details
console.log("Highest balance account details:", accounts.reduce((a, b) => (b.balance > a.balance ? b : a)));

//9 print transaction history of 1002
console.log("Transaction history of 1002:", accounts.find((a) => a.acno === 1002).transaction);

//10 print transaction history of account 1003
console.log("Transaction history of 1003:", accounts.find((a) => a.acno === 1003).transaction);
