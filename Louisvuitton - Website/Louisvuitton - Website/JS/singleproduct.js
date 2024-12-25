var alldata = new URLSearchParams(window.location.search)
var id = alldata.get("id")

fetch(`http://localhost:3000/product?id=${id}`)
.then((Res)=>{
    return Res.json()
})
.then((res)=>{
    console.log(res[0].id);
    document.getElementById("single-pro").innerHTML = singleproview(res)
    document.getElementById("addcart").addEventListener("click",()=>{
        cart(res)
    })
})
.catch((Err)=>{
    console.log(Err);
    
})

function singleproview(arr){
    return arr.map((el)=>{
        return `<div class="pro-card">

        <div class="proimg">
          <img src="${el.imageURL}" alt="">
           <i class="fa-solid fa-heart" id="like"></i>
        </div>

        <div class="pro-info">
            <h2 class="text-[13px] text-[#909090]" >${el.title1}</h2>
            <h4>${el.title2}</h4>
            <p class="font-light"> <span>&#8377</span> ${el.price}</p>

            <p> ${el.prodis} </p>

          <a href="cart.html"><button id="addcart">Buy Now<button> </a>
        </div>
    </div>`
    }).join("")
}

function cart(res){

    fetch(`http://localhost:3000/cart?id=${res[0].id}`)
    .then((Res) => {
        return Res.json()
    })
    .then((res) => {

        console.log(res);
        console.log(res.length);
        
        
         if (res.length > 0) {
          
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This Item Is Already Present!",

                html: `
                Go to This Page
                <a href="cart.html" autofocus   style="text-decoration: underline; color: blue;">Lets Check</a>,
                `,
              });


        } else {
            fetch(`http://localhost:3000/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({...res[0],quantity : 1})
            })
                .then((Res) => {
                    return Res.json()
                })
                .then((Res) => {
                    console.log(Res)
                })
                .catch((err) => {
                    console.log(err)
                })

                
                setTimeout(() => {
                    
                    window.location.reload()
                },1000);
        }
    })
    .catch((err) => {
        console.log(err)
    })
    

}

addTocart()

