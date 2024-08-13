// year
function leap()
{
    let year=parseInt(document.getElementById("year").value);

    switch(true)
    {
        case (year%4==0):
            document.getElementById("find").value="Leap Year";
            break;

        default:
            document.getElementById("find").value="Not A Leap Year";
    }
}


// second large

function large()
{
    let a=parseInt(document.getElementById("first").value);

    let b=parseInt(document.getElementById("second").value);

    let c=parseInt(document.getElementById("third").value);

    if((a<b && a>c) || (a>b && a<c) )
        {
            document.getElementById("lnumber").value=a;
        }
    else if((b<a && b>c) || (b>a && b<c))
        {
            document.getElementById("lnumber").value=b;
        }    
    else if((c<a && c>b) || (c>a && c<b))
        {
            document.getElementById("lnumber").value=c;
        }    
}

// range

function range()
{

    let min=parseInt(document.getElementById("min").value);

    let max=parseInt(document.getElementById("max").value);

    let num=parseInt(document.getElementById("num").value);

    if(num>=min && num<=max)
        {
            document.getElementById("ans").value="Within Range"
        }
    else 
    {
         document.getElementById("ans").value="Out of Range"
    }    

}


// GPA

function gpa()
{

    let g=parseInt(document.getElementById("grade").value);

    switch(true)
    {
        case (g<=100 && g>=90):
            document.getElementById("print").value="4.0";
            break;

        case (g<=89 && g>=80):
            document.getElementById("print").value="3.0";
            break;

        case (g<=79 && g>=70):
            document.getElementById("print").value="2.0";
            break;   
            
        case (g<=69 && g>=60):
            document.getElementById("print").value="4.0";
            break;
            
         default:
            document.getElementById("print").value="0.0";   
    }
}




// eligible for loan

function loan()
{
    let income=parseInt(document.getElementById("income").value);

    let score=parseInt(document.getElementById("score").value);

    let loanamount=parseInt(document.getElementById("loanAmount").value);

    if(income>50000 && score>700 && loanamount<income/2)
        {
            document.getElementById("value").value="Eligible For Loan";
        }
    else 
    {
        document.getElementById("value").value="Not Eligible For Loan";
    }    
}
