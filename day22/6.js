function capitalizeWords (sentence)
{

    let a="";
    for(let i=0;i<sentence.length;i++)
    {
        if(i==0 || sentence[i-1]==" ")
        {
            a+=sentence[i].toUpperCase();
        }
        else{
           a+=sentence[i];
        }
    }
    return a;

}

const sentence = "hello world";
console.log(capitalizeWords(sentence));