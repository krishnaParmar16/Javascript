fetch("http://localhost:3000/products")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    document.querySelector(".product-box").innerHTML=view(res);
})
.catch((err)=>{
    console.log(err);
})

function view(arr)
{
    return arr.map((element,i)=>{
        return `
        
         <div class="box">
              <div id="p-img">
                  <img src="${element.image}" alt="${element.title}" > 
              </div>
              <div id="p-text">
                    <div class="rate">
                       <p class="p1">${element.rating}</p>
                       <p class="p2"><i class="fa-solid fa-star"></i></p>
                       <p class="p3">${element.pepole}</p>
                    </div>
                    <h6>${element.title}</h6>
                    <div class="p-name">
                    <span>Size: ${element.size}</span><span><ul><li>${element.edit}</li></ul></ span>
                    </div>
                    <p class="price1">${element.price}</p>
                    <button id="p-cart" onclick="cart(${element.id})">Add to cart</button>
              </div>
          </div>    
        
        `
    }).join("")

}


function cart(id)
{
    fetch(`http://localhost:3000/products/${id}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        

        fetch(`http://localhost:3000/cart`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(res)
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            document.querySelector("#cart-page").innerHTML=show(res);
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

       
    })
    .catch((err)=>{
        console.log(err);
    })
}

function show(arr)
{
    return arr.map((element,i)=>{
        return `
        
       
       <div class="box">
              <div id="p-img">
                  <img src="${element.image}" alt="${element.title}" > 
              </div>
              <div id="p-text">
                    <div class="rate">
                       <p class="p1">${element.rating}</p>
                       <p class="p2"><i class="fa-solid fa-star"></i></p>
                       <p class="p3">${element.pepole}</p>
                    </div>
                    <h6>${element.title}</h6>
                    <div class="p-name">
                    <span>Size: ${element.size}</span><span><ul><li>${element.edit}</li></ul></ span>
                    </div>
                    <p class="price1">${element.price}</p>
                   
              </div>
          </div>    
        
        
        `
    })
}



