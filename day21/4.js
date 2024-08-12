const words = ['apple', 'banana', 'cherry', 'date']; 

let data=words.map((element,index)=>{

    return element+index;
})
console.log(data);