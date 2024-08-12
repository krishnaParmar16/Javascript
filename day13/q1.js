// Create a program that prints all odd numbers between 1 and 10 using a for loop. Use the continue statement to skip even numbers

let i;

for(i=1;i<=10;i++)
    {
        if(i%2==0)
            {
                continue;
            }
        console.log(i);    
    }