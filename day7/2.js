// Question 2: Determine the minimum and maximum of three given numbers.
// Input: 7, 2, 9
// Output: Minimum: 2, Maximum: 9

let a=7;
let b=2;
let c=9;

if(a>b)
    {
        if(a>c)
            {
                console.log("Maximum:"+a);
            }
            else
            {
                console.log("Maximum:"+c);
            }    
    }
else
    {
        if(b>c)
            {
                console.log("Maximum:"+b);
            }
        else
            {
                console.log("Maximum:"+c);
            }    
    }    




    if(a<b)
        {
            if(a<c)
                {
                    console.log("Minimum:"+a);
                }
            else
                {
                    console.log("Minimum:"+c);
                }    
        }
    else 
        {
            if(b<c)
                {
                    console.log("Minimum:"+b);
                }
            else
                {
                console.log("Minimum:"+c);
                }    
        }       

