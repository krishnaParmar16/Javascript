
fetch("https://fakestoreapi.com/products")  // promise
.then((res)=>{
   return res.json();
})
.then((res)=>{
    document.querySelector(".product-box").innerHTML=view(res)
})
.catch((err)=>{
   console.log(err)
})


function view(arr){

    return arr.map((element,i)=>{
         return `
           <div class="box">
              <div id="p-img">
                  <img src="${element.image}" alt="${element.title}" > 
              </div>
              <div id="p-text">
                   <h6 style="margin-left:10px;margin-right:8px;font-weight:bold;text-shadow: 1px 0px gray;">${element.title}</h6>
                   <p style="margin-left:10px;margin-right:8px">Price :- ${element.price}</p>
                   <p style="margin-left:10px;margin-right:8px">Category :- ${element.category}</p>
                   <a class="cart">Add to cart</a>
              </div>
           </div>
         
         `
     }).join("")
 
 }