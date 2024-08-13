let str= ["apple", "banana", "pear"]

let ans=str.filter((element)=>{
    if(element.length>3){
        return element;
    }
})

console.log(ans)