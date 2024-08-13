// factorial

function fact()
{
    let n=parseInt(document.getElementById("num").value);
    let ans=a(n);
    document.getElementById("ans").value=ans;

    function a(num)
    {
        let f=1;
        for(let i=1;i<=num;i++)
        {
             f *= i;
        }
            return f;

    }

}


// fibonacci serice


function fibo()
{
    let n=document.getElementById("num").value;

    let first=0;
    let second=1;


        for(let i=1;i<=n-2;i++)
        {
        let next=first+second;

        first=second;
        second=next;
        document.getElementById("ans").value=next;

        }

    
    

}


// even or not



function even()
{
    let n=document.getElementById("num").value;
    let ans=isEven();

    document.getElementById("ans").value=ans;

    function isEven()
    {
        if(n%2==0)
        {
            return true;
        }
        else{
            return false;
        }
    }
}



// absolute value
function absolute()
{

    let n=document.getElementById("num").value;

    let ans=a();
    document.getElementById("ans").value=ans;
  
  
  
  function a()  {
  if(n<0)
    {
        let ans=n-n;


        let final=ans-n;

       return final;
    }
    else{
        return n;
    }}


}


// square 

function sqr()
{
    let n=document.getElementById("num").value;
    let ans="";

    for(let i=1;i<=n;i++)
    {
         ans=ans+s(i)+" ";
         
    }
    document.getElementById("result").value=ans;


    function s(a)
    {
        return a*a;
    }
}

