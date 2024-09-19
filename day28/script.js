let form=document.querySelector("#form")
let array=[];

form.addEventListener("submit",(el)=>{

    let isValid=true;

    el.preventDefault();

    let username=document.querySelector("#username").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;


    if(username == "")
    {
        document.querySelector("#userError").innerText="Username is Compulsory to Login";
        isValid=false
    }
    else if(username.length < 8){
        document.querySelector("#userError").innerText="Username must be 8 character ";
        isValid=false
    }

    if(email == "")
    {
        document.querySelector("#emailError").innerText="Email is compulsory";
        isValid=false
    }
    if(password.length < 8)
    {
        document.querySelector("#passError").innerText="Password length must be 8";
        isValid=false
    }
    


if(isValid == true)    
{
    let obj={
        username:username,
        email:email,
        password:password
    }

    array.push(obj)
    console.log(array);
}
    
})

