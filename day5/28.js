//  Calculate the total bill amount including 25% tax, 15% tip, and a $20 service charge for a purchase of $200.
 var amount=200;
 var tax=amount*25/100;
 var tip=amount*15/100;

 var service_charge=20;

 var total=amount+tax+tip+service_charge;

 console.log("Total bill amount: $"+total);