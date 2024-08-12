// Write a JavaScript program to calculate the sum of numbers from 1 to 100. Use a for loop to iterate through the numbers and accumulate the sum. If the sum exceeds 1000, break out of the loop and display the current sum.

let i,sum=0;

for(i=1;i<=100;i++)
    {
        sum+=i;
        if(sum>1000)
            {
                break;
            }
    }

    console.log("Sum is:",sum);


