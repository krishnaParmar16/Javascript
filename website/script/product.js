// product page

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
                 <button class="heart" onclick="whishlist(${element.id})"><i class="fa-regular fa-heart"></i></button>
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
                    <p class="price1">₹${element.price}</p>
                    <button id="p-cart" onclick="cart(${element.id})">Add to cart</button>
              </div>
          </div>    
        
        `
    }).join("")

}




// cart page

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






fetch(`http://localhost:3000/cart`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    document.querySelector("#cart-page").innerHTML=show(res);
    tprice(res);
})
.catch((err)=>{
    console.log(err);
})



function tprice(res)
{
    let sum=0;

    res.forEach(element => {
        sum += +element.price;
    });

    document.querySelector("#t-price").innerText="₹"+sum ;
}


function show(arr)
{
    return arr.map((element,i)=>{
        return `
        
       
       <div class="box">
              <div id="p-img">
               <button class="heart" onclick="whishlist(${element.id})"><i class="fa-regular fa-heart"></i></button>
                  <img src="${element.image}"  alt="${element.title}" > 
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
                    <p class="price1" >₹${element.price}</p>
                     <button id="delete" onclick="deleteItem(${element.id})">Delete</button>
              </div>
          </div>    
        
        
        `
    }).join("")
}

// delete 

function deleteItem(id) {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: 'DELETE',
    })
      .then((res)=>{
        return res.json();
      })
   

    .then((res)=>{
        fetch(`http://localhost:3000/cart`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            document.querySelector("#cart-page").innerHTML=show(res);
            tprice(res);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    })
      .catch((err) => {
        console.log(err);
      });
  }





//   whishlist




function whishlist(id)
{
    fetch(`http://localhost:3000/products/${id}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        

        fetch(`http://localhost:3000/whishlist`,{
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

fetch(`http://localhost:3000/whishlist`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    document.querySelector("#list").innerHTML=watch(res);
})
.catch((err)=>{
    console.log(err);
})


function watch(arr)
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
