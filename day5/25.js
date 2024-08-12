//  Determine the total bill amount including a 20% tip and 10% tax for a meal costing $100.

let amount=100;
let tip=amount*20/100;

let tax=amount*10/100;

total=amount+tip+tax;

console.log("Total bill amount: $"+total);