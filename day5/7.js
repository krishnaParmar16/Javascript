// Determine the compound interest for $5000 at 6% compounded annually for 3 years.


let principal_amount=5000;
let rate=6/100;
let time=3;
let n=1;


let a=1+rate/n;

let ci=principal_amount* Math.pow(a,n*time);

let final=ci-principal_amount;
console.log("Compound interest is:"+final);
