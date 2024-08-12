let i,j,k;

for(i=1;i<=5;i++)
    {
        let a="";
        let b="";
        for(k=4;k>=i;k--)
            {
                a+=" "
            }
        for(j=1;j<=i;j++)
            {
                b+=j;
            }    
            console.log(a+b);
    }