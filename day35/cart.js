let arr=JSON.parse(localStorage.getItem("cart")) || [];
let mainBox=document.querySelector(".main");


function view()
{
    arr.forEach((element,index)=>{
        
        let box=document.createElement("div");
        box.setAttribute("class","box");

        let div1=document.createElement("div");
        div1.setAttribute("class","div1");
        let image=document.createElement("img");
        image.setAttribute("src",element.IMAGE);
        image.setAttribute("class","i1");


        let div2=document.createElement("div");
        div2.setAttribute("class","div2");
        let p1=document.createElement("p");
        p1.setAttribute("class","p1")
        p1.innerText=element.TITLE;
        let p2=document.createElement("p");
        p2.setAttribute("class","p2")
        p2.innerText=element.PRICE;

        let btn=document.createElement("button");
        btn.setAttribute("class","btn");
        btn.innerText="Delete";
        btn.addEventListener("click",()=>{
            arr.splice(index,1)
            localStorage.setItem("cart",JSON.stringify(arr));
            view();
        })

      
        div2.append(p1,p2);
        div2.append(btn)
        div1.append(image);
        box.append(div1,div2);
        mainBox.append(box);

    });
}


view();