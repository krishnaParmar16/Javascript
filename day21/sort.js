let num=[27,17,19,21,6,32,30];

// sorting in accending order 
let ans=num.sort((a,b)=>a-b)
console.log(ans);

// sorting in decending order
let ans1=num.sort((a,b)=>b-a)
console.log(ans1);


// for string 

let word=["jan","feb","mar","apr","may"];

// sorting in accending order
let ans3=word.sort((a,b)=>a.localeCompare(b));
console.log(ans3);


// sorting in decending order
let ans4=word.sort((a,b)=>b.localeCompare(a));
console.log(ans4);
