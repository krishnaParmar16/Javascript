function per()
{
    let grade=document.getElementById("grade").value;

    if(grade>=90)
        {
            document.getElementById("per").innerText="A";
        }
    else if(grade>=80 && grade<=89)
        {
            document.getElementById("per").innerText="B";
        }    
    else if(grade>=70 && grade<=79)
        {
            document.getElementById("per").innerText="C";
        }    
    else if(grade>=60 && garde<=69)
        {
            document.getElementById("per").innerText="D";
        }    
    else{
        document.getElementById("per").innerText="F";
    }

}
