function transformArray (num)
{

    let ans=num.map((element)=>
    {
        if(element%2==0)
        {
            return element*element;
        }
        else{
            return element*element*element;
        }
    })

    return ans;

}

const numbers = [1, 2, 3, 4, 5];

console.log(transformArray(numbers))