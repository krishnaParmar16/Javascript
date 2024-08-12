// leap year

function leap()
{
    let year=document.getElementById("year").value;
    
    if((year%4==0 && year%100!=0) || year%400==0)
        {
            document.getElementById("note").innerText="Leap year"
        }
        else 
        {
            document.getElementById("note").innerText="Not a leap year"
        }
}


// eligible to vote

function age()
{

    let age=document.getElementById("age").value;

    let city=document.getElementById("city").value;

    if(age>=18 && city=="India")
        {
            document.getElementById("info").innerText="You are eligible to vote";
        }
        else 
        {
            document.getElementById("info").innerText="You are not eligible to vote";
        }

}


// temperature

function temp()
{
    let temp=document.getElementById("temp").value;

    if(temp>=30)
        {
            document.getElementById("value").innerText="Hot";
        }
    else if(temp>=20 && temp<30){
            document.getElementById("value").innerText="Moderate";
        }
     else {
        document.getElementById("value").innerText="Cool";
     }   
}


// largest number

function large()
{
    let f=parseInt(document.getElementById("f").value);
    let s=parseInt(document.getElementById("s").value);
    let t=parseInt(document.getElementById("t").value);

    if(f>s && f>t)
        {
               document.getElementById("large").value=f;
        }
        else if(s<t)
            {
                document.getElementById("large").value=s;
            }
        else {
                document.getElementById("large").value=t;
        }    
}



// even or odd

function num()
{
    let num=document.getElementById("num").value;

    if(num%2==0)
        {
            document.getElementById("n").innerText="Even";
        }
    else
        {
            document.getElementById("n").innerText="Odd";
        } 
}


// simple interest


function interest()
{

    let amount=document.getElementById("amount").value;
    let rate=document.getElementById("rate").value;
    let time=document.getElementById("time").value;

    let ineterst=amount*rate*time/100;

    document.getElementById("final").value=ineterst;

}


// password

function password()
{
    let store_pass="krishna16";

    let currentPassword = document.getElementById("current_password").value;

    if(currentPassword == store_pass)
        {
            document.getElementById("msg").innerText="Password is correct"
        }
    else
         {
            document.getElementById("msg").innerText="Password is incorrect"
        }

}


// vowel 

function find()
{

    let a=document.getElementById("l").value;

    if(a=="a" || a=="e" || a=="i" || a=="o" || a=='u')
        {
             document.getElementById("vowel_consonant").innerText="Vowel";
        }
    else
        {
            document.getElementById("vowel_consonant").innerText="Consonant";
        }
}


// age restriction

function restriction()
{
    let b=document.getElementById("user").value;

    if(b>=13)
        {
            document.getElementById("access").innerText="Granting access"
        }
    else 
        {
            document.getElementById("access").innerText="Denying access"
        }    
}


// divisible by 3 and 5

function calculate()
{

    let number=document.getElementById("point").value;

    if(number%3==0 && number%5==0)
        {
            document.getElementById("cal").innerText="Divisible by both 3 and 5";
        }
    else
        {
            document.getElementById("cal").innerText="Not divisible by both 3 and 5";
        }    
}