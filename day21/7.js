const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let sum=0;


numbers.forEach((element,index)=>{
 
    if(index%2===0)
    {
        sum += element;
    }
})
console.log(sum)
