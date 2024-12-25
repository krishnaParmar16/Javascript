
fetch(`http://localhost:3000/cart`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res.length);

        var cartlength = Res.length

        document.getElementById("cartnum").innerHTML = cartlength

        document.querySelector("#cartitem").innerHTML = cartview(Res)
    })
    .catch((Err)=>{
        console.log(Err)
})


function cartview(arr){
   return arr.map((el)=>{
    return ` <div class="pro-card">

    <div class="proimg">
      <img src="${el.imageURL}" alt="">
       <i class="fa-solid fa-heart" id="like"></i>
    </div>

    <div class="pro-info">
        <h2 class="text-[13px] text-[#909090]" >${el.title1}</h2>
        <h4>${el.title2}</h4>
        <p class="font-light"> <span>&#8377</span> ${el.price * el.quantity }</p>

        <p> ${el.prodis} </p>

          <button id="butt" onclick="remove(${el.id})">Delete</button>
                <br><br>

                <button id="pluse" onclick="EditData(${el.id},${el.quantity},'dec')">-</button>
                <input value="${el.quantity}" id="int">  
         <button id="pluse" onclick="EditData(${el.id},${el.quantity},'inc')">+</button> 
    </div>
</div>`
}).join("")
}



function EditData(id, quantity, clickbtn) {
    var a = quantity;
    
    if (clickbtn == 'inc') {
        a = a + 1;
    } else if (clickbtn == 'dec') {
        a = a - 1;
        if(a < 1 ){
            document.getElementById("int").setAttribute("disabled") 
        }
    } 

    fetch(`http://localhost:3000/cart${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({quantity : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

}

//------------------//

function remove(id){
    fetch(`http://localhost:3000/cart${id}`,{
        method : "DELETE",
    })
    .then((res)=>{
        return res.json();
    })
    .then((Res)=>{
        document.querySelector("#cartitem").innerHTML = view(Res)
    })
    .catch((Err)=>{
        console.log(Err)
    })

}