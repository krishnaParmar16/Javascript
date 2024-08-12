// tax amount
function cal()
{
    let amount=parseInt(document.getElementById("amount").value);

    let tax;

    if(amount<=10000)
        {
            document.getElementById("rate").value="5 %"
            tax=amount*5/100;
            document.getElementById("tax").value=tax+" $";
        }
    else if(amount>=10001 && amount<=50000)
        {
            document.getElementById("rate").value="10 %"
            tax=amount*10/100;
            document.getElementById("tax").value=tax+" $";
        }
    else if(amount>=50001 && amount<=1000000)
        {
            document.getElementById("rate").value="15 %"
            tax=amount*15/100;
            document.getElementById("tax").value=tax+" $";
        }
    else if(amount>1000000)
        {
            document.getElementById("rate").value="20 %"
            tax=amount*10/100;
            document.getElementById("tax").value=tax+" $";
        }    

}



// electricity bill

function find()
{

    let con=parseFloat(document.getElementById("consumption").value);

    let rate;
    let bill;
    if(con<=100)
        {
            rate=0.1;
            bill=con*rate;
            document.getElementById("total").value=bill+" $";
        }
    else if(con>=101 && con<=200)
        {
            rate=0.15;
            bill=con*rate;
            document.getElementById("total").value=bill+" $";
        }    
    else if(con>=201 && con<=300)
        {
            rate=0.2;
            bill=con*rate;
            document.getElementById("total").value=bill+" $";
        }   
    else if(con>300)
        {
            rate=0.25;
            bill=con*rate;
            document.getElementById("total").value=bill+" $";
        }

}

// age

function age()
{
    let age=parseFloat(document.getElementById("age").value);

    if(age<1)
        {
            document.getElementById("ans").innerText="Infant";
        }
    else if(age>=1 && age <=12)
        {
            document.getElementById("ans").innerText= "Child";
        }  
    else if(age>=13 && age<=19)
        {
            document.getElementById("ans").innerText= "Teenager";
        }      
    else if(age>=20 && age<=64)
        {
            document.getElementById("ans").innerText="Adult";
        }    
    else if(age>=65)
        {
            document.getElementById("ans").innerText="Senior Citizen";
        }    
}



// year

function year()
{
    let year=parseInt(document.getElementById("year").value);


    if(year<0)
        {
            document.getElementById("value").innerText="Ancient";
        }
    else if(year>=1 && year<=1500)
        {
            document.getElementById("value").innerText="Medieval";
        }    
    else if(year>=1501 && year<=2024)
        {
            document.getElementById("value").innerText="Modern";
        }    
    else if(year>2024)
        {
            document.getElementById("value").innerText="Future";
        }    
}