const numbers = [5, 10, 15, 20, 25, 30, 35, 40];

let data=numbers.filter((element,index)=>{
    if(index%2!=0)
    {
        return element;
    }
})

console.log(data)