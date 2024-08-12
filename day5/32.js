// Determine the total bill amount including 12% tax, 18% tip, and a $25 service charge for a purchase of $500 with a $50 voucher.

let amount=500;
let tax=amount*12/100;
console.log(tax);
let tip=amount*18/100;
console.log(tip);

let service_charge=25;
let voucher=50;


let total=amount+tax+tip+service_charge;

console.log("Total bill amount is:$"+total);