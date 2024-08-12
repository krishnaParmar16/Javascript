function cal()
{

let unit=parseInt(document.getElementById("unit").value);

let U;
let charge;
let bill;
let U1;
let I;
let I1;
let W;

if(unit>=1 && unit<=50)
    {
        U=unit*0.50;
        charge=U*20/100;
        bill=U+charge;
        document.getElementById("bill").value=bill+" Rs";
    }
else if(unit>=51 && unit<=150)
    {
        U=unit-50;
        U1=50*0.50;
        I=U*0.75;
        charge=(U1+I)*20/100;
        bill=U1+I+charge;
        document.getElementById("bill").value=bill+" Rs";
    }
else if(unit>=151 && unit>=250)
    {
        U=unit-150;
        U1=50*0.50;
        I=100*0.75;
        I1=U*1.20;
        charge=(U1+I+I1)*20/100;
        bill=U1+I+I1+charge;
        document.getElementById("bill").value=bill+" Rs";
    }
else if(unit>=251)
    {
        U=unit-250;
        U1=50*0.50;
        I=100*0.75;
        I1=100*1.20;
        W=U*1.50;
        charge=(U1+I+I1+W)*20/100;
        bill=U1+I+I1+W+charge;
        document.getElementById("bill").value=bill+" Rs";

    }
}