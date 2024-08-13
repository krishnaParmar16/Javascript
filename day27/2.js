
document.querySelector("#btn").addEventListener("click",()=>
    {
        
    try{
    
        let a=document.querySelector("#in").value;
    
    
            if(a == "")
            {
                throw new Error ("Please enter value");
            }
            else if(a<0)
            {
                throw new Error("Negative number");
            }
            else if(a>=0){
    
                console.log(a);
                document.querySelector("#ans").innerHTML=`<p style="color:green">Positive Number</p>`;
            }
            else if(a == '!' || a=='@' || a=='#'|| a=='$'|| a=='%' || a=='^'|| a=='&'|| a=="*"||a=='('|| a==')'|| a=='_'|| a=='-'||a=='+'|| a=='='|| a=='`'|| a=='~'|| a=='|'||a=='[' || a==']' || a==';'|| a==':'|| a=='"'|| a=='>'|| a=='<'|| a=='?'|| a=='/')
                {
                throw new Error("This is Sapcial Charecter")
             }
            else if(a >= 'a' || a <= 'z'|| a>='A' || a<='Z')
            {
                throw new Error("This is Character");
            }
          
            
    }
    catch(err){
        console.log(err);
        document.querySelector("#ans").innerHTML=`<p style="color:red">${err}</p>`;
    }
    finally{
        console.log("Code completed");
        
    }
    });
    