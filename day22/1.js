function doubleAndAddIndex(number)
{

    let ans=number.map((element,index)=>{
        return element+element+index;
    })

    return ans;
}


const number=[2,3,4]
console.log(doubleAndAddIndex(number))
