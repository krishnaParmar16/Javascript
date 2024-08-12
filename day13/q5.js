let i,j;

for(i=1;i<=5;i++)
    {
        let a="";
        for(j=1;j<=5;j++)
            {
                if( i==2 && (j>1 && j<5)|| i==3 && (j>1 && j<5) ||i==4 && (j>1 && j<5)  )
                    {
                        a=a+" ";
                    }
                else
                    {
                        a=a+"*";
                    }    
            }
            console.log(a);
    }

    console.log("                     ")

 for(i=1;i<=5;i++)
    {
        let a="";
        for(j=1;j<=5;j++)
            {
                if(i==2 && j==3 || i==3 && j==2 || i==3 && j==4 || i==4 && j==3)
                    {
                        a=a+" ";
                    }
                else 
                    {
                        a=a+"*";
                    }    
            }
            console.log(a);
    }   