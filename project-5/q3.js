let array=["apple", "banana", "cherry"];
let a="";
for(i=0;i<array.length;i++)
{
    if(array[i].length>5)
    {
        a+=array[i]+" ";
    }
}
console.log(a);