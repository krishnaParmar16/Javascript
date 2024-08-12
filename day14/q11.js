let i,j,k;

for(i=5;i>=1;i--)
    {
        let a="";
        let b="";
        for(k=i+1;k<=5;k++)
            {
                a+=" ";
            }
            for(j=1;j<=i;j++)
                {
                    b+=j;
                }
                console.log(a+b);
    }