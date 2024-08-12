//  Determine the total bill amount including 15% tax and a $10 delivery fee for a purchase of $150.

let amount=150;
let tex=amount*15/100;

let delivery_fee=10;

total_bill=amount+tex+delivery_fee;

console.log("Total bill amount: $"+total_bill);