function filterEvenNumbers(number)
{

    let ans=number.filter((element,index)=>{
        return element%2==0;
    })
    return ans;

}

const number = [1, 2, 3, 4, 5, 6];

console.log(filterEvenNumbers(number));