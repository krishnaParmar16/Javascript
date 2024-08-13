
document.querySelector("#btn").addEventListener("click",()=>
{
    
try{

    let a=document.querySelector("#num").value;


        if(a == "")
        {
            throw new Error ("Please enter any number");
        }
        else if(a<0)
        {
            throw new Error("Negative number");
        }
        else{

            console.log(a);
            document.querySelector("#ans").innerHTML=`<p style="color:green">Positive Number</p>`;
        }
        
}
catch(err){
    console.log(err);
    document.querySelector("#ans").innerHTML=`<p style="color:red">${err}</p>`;
}
finally{
    console.log("Code completed");
    
}
});
