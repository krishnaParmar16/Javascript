 document.querySelector(".main").innerHTML=
 `     <button id="prev"><i class="fa-solid         fa-chevron-left"></i></button>
        <div id="slider"></div>
        <button id="next"><i class="fa-solid fa-chevron-right"></i></button>
 `

let btn1=document.querySelector("#prev");
let btn2=document.querySelector("#next");

let images=[
    "https://cdn.pixabay.com/photo/2023/10/29/13/21/waterfall-8350178_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/27/10/51/pier-8091934_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/05/21/04/alps-8368328_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg"
]


btn1.addEventListener("click",prev);
btn2.addEventListener("click",next);

let a=0;
 document.querySelector("#slider").innerHTML=`<img src="${images[0]}" height="550px" width="1000px">`


 function prev()
 {
    if(a>0)
    {
        a--;
         document.querySelector("#slider").innerHTML=`<img src="${images[a]}" height="550px" width="1000px">`
    }
    else{
        a=images.length-1 
        document.querySelector("#slider").innerHTML=`<img src="${images[a]}" height="550px" width="1000px">`
    }
 }

 
 function next()
 {
    if(a < images.length-1)
    {
    a++;
    document.querySelector("#slider").innerHTML=`<img src="${images[a]}" height="550px" width="1000px">`
    }
    else{
        a=0;
        document.querySelector("#slider").innerHTML=`<img src="${images[a]}" height="550px" width="1000px">`
    }
 }