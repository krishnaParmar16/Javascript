document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();


    let fn=document.querySelector("#fn").value;
    let ln=document.querySelector("#ln").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;


    let obj={
        Firstname:fn,
        Lastname:ln,
        Email:email,
        Password:password
    }


    fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(obj)  
    })
    .then((res)=>{
        return res.JSON();
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    




})




