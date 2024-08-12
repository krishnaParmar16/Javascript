// Calculate the total bill amount including tax. Given an initial amount and a tax rate, calculate the total bill amount.

let amount=2500;

console.log("The amount is:"+amount);

let rate=5;

console.log("The tax rate is:"+rate+"%");


let tex=amount*rate/100;
console.log("The tex amount is:"+tex);
let total=amount+tex;

console.log("The total bill amount is:"+total);