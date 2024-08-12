//  Determine the total bill amount including 8% tax and a $20 service fee for a purchase of $250 with a $30 discount.


var discount=30;
var amount=250-discount;
var tax=amount*8/100;
var service_charge=20;


var total=amount+tax+service_charge;

console.log("Total bill is:$"+total);