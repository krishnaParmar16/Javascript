let tbody=document.querySelector("tbody");
let arr= JSON.parse(localStorage.getItem("item"))  || [];

document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let image=document.getElementById("img").value;
    let title=document.getElementById("title").value;
    let price=document.getElementById("price").value;


    let obj={
        IMAGE:image,
        TITLE:title,
        PRICE:price
    }

    arr.push(obj)
    localStorage.setItem("item",JSON.stringify(arr));
    console.log(arr);
    view()
});


function view()
{
    tbody.innerHTML="";
    arr.forEach((element,index)=>{

        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        let img1=document.createElement("img");
        img1.setAttribute("src",element.IMAGE);
        img1.setAttribute("alt",element.TITLE);
        img1.setAttribute("class","img");

        let td2=document.createElement("td");
        td2.innerText=element.TITLE;
        td2.setAttribute("class","td2");
        let td3=document.createElement("td");
        
        td3.innerText=element.PRICE;
        td3.setAttribute("class","td3");
        let td4=document.createElement("td");
        let btn1=document.createElement("button");
        btn1.innerText="Add to cart";
        btn1.setAttribute("class","btn1");

        let cart=JSON.parse(localStorage.getItem("cart")) || [];
        btn1.addEventListener("click",()=>{
            cart.push(element);
            localStorage.setItem("cart",JSON.stringify(cart));

        })

        let td5=document.createElement("td");
        let btn2=document.createElement("button");
        btn2.innerHTML="Delete";
        btn2.setAttribute("class","btn2");
        btn2.addEventListener("click",()=>{
            // console.log(index);
            arr.splice(index,1);
            localStorage.setItem("item",JSON.stringify(arr));
            view();
        })



        td4.append(btn1);
        td5.append(btn2);
        td1.append(img1);
        tr.append(td1,td2,td3,td4,td5);
        tbody.append(tr);

    })

}


view();