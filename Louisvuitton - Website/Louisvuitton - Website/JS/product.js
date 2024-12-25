fetch(`http://localhost:3000/product`)
.then((Res)=>{
    return Res.json()
})
.then((res)=>{
    console.log(res);
    document.getElementById("pro-sec-1").innerHTML = proview(res) 
    sele1(res)
})
.catch((Err)=>{
    console.log(Err);
})

function proview(arr){
    return arr.map((el)=>{
        return ` <a href="singleproduct.html?id=${el.id}">
    <div class="pro-card">

        <div class="proimg">
          <img src="${el.imageURL}" alt="">
        </div>

        <div class="proinfo ps-3 pb-2">
            <h2 class="text-[13px] text-[#909090]" >${el.title1}</h2>
            <h4>${el.title2}</h4>
            <p class="font-light"> <span>&#8377</span> ${el.price}</p>
            <i class="fa-solid fa-heart" id="like"></i>
        </div>
    </div>
</a> `
    }).join("")
}


// Options

function sele1(arr) {
  
    let sel1 = document.getElementById("all")
    sel1.addEventListener("change", () => {
  
        let compare= sel1.value
        console.log(compare);
        
  
        if(compare== 'opt1'){

            
            
            let anss = arr.filter((el) => {
                return el.type =="handbag"
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
  
        if(compare== 'opt2'){
            let anss = arr.filter((el) => {
                return el.type == "bag"
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
        if(compare== 'opt3'){
            let anss = arr.filter((el) => {
                return el.type == "watch"
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
        if(compare== 'opt4'){
            let anss = arr.filter((el) => {
                return el.type == "perfume"
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
        if(compare== 'opt5'){
            let anss = arr.filter((el) => {
                return el.type == "women"
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
        if(compare== 'opt6'){
            let anss = arr.filter((el) => {
                return el.type == "men"
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
})


}



