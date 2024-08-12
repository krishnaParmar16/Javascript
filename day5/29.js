//  Determine the total bill amount including 10% tax and a $15 delivery fee for a purchase of $300 with a $50 discount.

var amount=300
var tax=amount*10/100;
var delivery_fee=15;
var discount=50;


let total=amount-discount+tax+delivery_fee;

console.log("Total bill amount: $"+total);