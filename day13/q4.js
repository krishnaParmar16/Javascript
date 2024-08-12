// Print 10 fibonacci series with for loop 

let first=0;
let second=1;

let next;

for(let i=0;i<10;i++)
    {
        console.log(first);

        next=first+second;

        first=second;
        second=next; 
    }