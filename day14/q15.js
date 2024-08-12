let i,j,k;

for(i=1;i<=5;i++)
    {
        let a="";
        let b="";

        for(k=4;k>=i;k--)
            {
                a+=" ";
            }
        for(j=1;j<=i;j++)
            {
                b+=j;
            }
            console.log(a+b);
    }

    for(i=2;i<=5;i++)
        {
            let a="";
            let b="";

            for(j=i;j>=2;j--)
                {
                    a+=" ";
                }
                for(k=i;k<=5;k++)
                    {
                        b+=k;
                    }
                    console.log(a+b);
        }