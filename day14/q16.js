let i,j,k,h;


for(i=1;i<=5;i++)
    {
        let a="";
        let b="";
        let c="";
        for(j=1;j<=i;j++)
            {
                a+=j;
            }
        for(k=4;k>=i;k--)
            {
                b+="  ";
            }    
        for(h=i;h>=1;h--)
            {
                c+=h;
            }    
        console.log(a+b+c);    
    }