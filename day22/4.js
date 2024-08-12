function findIndexOfFirstNegative(num)
{
   for(let i=0;i<num.length;i++)
   {
    if(num[i]<0)
    {
        return i;
    }
    }   
        return -1;
    

}


const numbers = [1, 2, -3, 4, -5];
console.log(findIndexOfFirstNegative(numbers))