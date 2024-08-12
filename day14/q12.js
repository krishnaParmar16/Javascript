let i,j,k;

for(i=1;i<=5;i++)
    {
        let a="";
        let b="";
        for(k=i-1;k>=1;k--)
            {
                a+=" ";
            }
            for(j=i;j<=5;j++)
                {
                    b+=j;
                }
                console.log(a+b);  
    }