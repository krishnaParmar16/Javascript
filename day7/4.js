function find()
{
    var num=parseInt(document.getElementById("number").value);

    if(num == 0)
        {
            document.getElementById("ans").innerText="This number is Neutral";
        }
    else if( num > 0)
        {
            document.getElementById("ans").innerText="This number is Positive";
        }    
     else if(num < 0)
        {
            document.getElementById("ans").innerText="This number is Negative";
        }   
}