// Question 1: Determine the minimum and maximum of three given numbers.
// Input: 10, 15, 5
// Output: Minimum: 5, Maximum: 15

let a=10;
let b=15;
let c=5;

if(a>b && a>c)
    {
        console.log("Maximum:"+a);
    }
else if(b>c)
    {
        console.log("Maximum:"+b);
    }    
else
    {
        console.log("Maximum:"+c);
    }



    if(a<b && a<c)
        {
            console.log("Minimum:"+a);
        }
    else if(b<c)
        {
            console.log("Minimum:"+b);
        }    
    else
        {
            console.log("Minimum:"+c);
        }   