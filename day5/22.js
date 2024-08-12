// Calculate the total bill amount including 18% tax and a $5 service charge for a purchase of $80.

let amount=80;
let service_charge=5;
let tax=amount*18/100;

let total=amount+tax+service_charge;

console.log("Total bill amount:$"+total);