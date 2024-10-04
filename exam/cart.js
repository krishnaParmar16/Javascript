fetch(`http://localhost:3000/cart`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
     document.querySelector("#cart-box").innerHTML=view(res);
     
    })
    .catch((err)=>{
        console.log(err);
    })
    
    
    
        function view(arr)
        {
            console.log(arr);


            return arr.map((element,i)=>{
                return `
                <div class="box" >
                <div class="img">
                    <img src="${element.image}" alt="${element.title}">
                </div>
                <div class="p">
                    <h5>${element.title}</h5>
                    <p>₹ ${element.price}</p>
                 
                </div>
            </div> 
                `
            }).join("")
        }