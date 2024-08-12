let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let data=arr.map((element,index)=>{


    if(checkPrime(element)==true)
        {
            return element;
        }
        else{
            return 0;
        }


})


function checkPrime(arr)
{
    let count=0;
    for(let i=1;i<=arr;i++)
    {
        if(arr%i==0)
        {
            count++;
        }
    }

    if(count==2)
    {
        return true;
    }
    else{
        return false;
    }
}




console.log(data)