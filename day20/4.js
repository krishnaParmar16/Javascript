let arr=['a','b','c','d']

let data=arr.map((element,index)=>{

    if(index==1)
    {
        return element='z'
    }
    else{
        return element;
    }
})
console.log(data);