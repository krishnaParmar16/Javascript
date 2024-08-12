// Determine the compound interest for $7000 at 5% compounded annually for 2 years.

var principal_amount=7000;
var rate=5/100;
var time=2;

let n=1;


let a=1+rate/n;

let ci=principal_amount* Math.pow(a,n*time);

let final=ci-principal_amount;
console.log("Compound interest is:"+final);


