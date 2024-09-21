document.getElementById("form1").addEventListener("submit",(e)=>{

e.preventDefault();

let email1=document.getElementById("email1").value;
let password1=document.getElementById("password1").value;

fetch(`http://localhost:3000/users?Email=${email1}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    if(res.length == 0)
    {
        alert("Email invalid");
    }
    else{
        if(res[0].Password == password1)
        {
            alert("Login Successfully");
                window.location.href="index.html";
        }
        else{
            alert("Password Incorrect");
        }
    }
})
.catch((err)=>{
    console.log(err);
})



})
document.getElementById("signuppage").addEventListener("click",()=>{
    document.getElementById("signup").style.display=" block";
    document.getElementById("login").style.display=" none";
})
