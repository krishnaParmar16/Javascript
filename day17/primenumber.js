function prime(a)
{

    let count=0;
    for(let j=1;j<=a;j++)
    {
        if(a%j==0)
        {
            count++;
        }
    }

    if(count == 2)
    {
       return true;
    }
    else{
        return false;
    }


}

 function check(num)
 {
    for(let i=1;i<=num;i++)
        {
            if(prime(i))
            {
                console.log(i);
            }
        }

 }

 check(20)

     
