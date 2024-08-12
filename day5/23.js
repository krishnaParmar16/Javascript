// Find the compound interest for $3000 at 8% compounded semi-annually for 4 years


let principal_amount=3000;
let rate=8/100;
let time=4;

let n=2;


let a=1+rate/n;

let ci=principal_amount* Math.pow(a,n*time);

let final=ci-principal_amount;
console.log("Compound interest is:"+final);
