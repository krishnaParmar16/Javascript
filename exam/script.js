
let form=document.getElementById("form").addEventListener("submit",show)

function show()
{
    

        let image =document.getElementById("img").value;
        let title=document.getElementById("title").value;
        let price=document.getElementById("price").value;
    
        let obj={
            image:image,
            title:title,
            price:price
        }
    
        fetch(`http://localhost:3000/cart`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    
    
    
    

